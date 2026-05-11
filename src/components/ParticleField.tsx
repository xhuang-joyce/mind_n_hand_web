'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  gold: boolean;
}

const GOLD_RATIO = 0.26;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface ParticleFieldProps {
  /** Density: ~1 particle per N px². Lower = more particles. Default 18000. */
  density?: number;
  min?: number;
  max?: number;
}

export default function ParticleField({
  density = 18000,
  min = 24,
  max = 160,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const count = Math.max(min, Math.min(max, Math.round((rect.width * rect.height) / density)));
      particlesRef.current = Array.from({ length: count }, () => ({
        x: rand(0, rect.width),
        y: rand(0, rect.height),
        r: rand(1.2, 3.4),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        alpha: rand(0.35, 0.85),
        gold: Math.random() < GOLD_RATIO,
      }));
    }

    resize();
    seedParticles();

    const handleResize = () => {
      resize();
      seedParticles();
    };
    window.addEventListener('resize', handleResize);

    function drawParticles(width: number, height: number) {
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -2) p.x = width + 2;
        else if (p.x > width + 2) p.x = -2;
        if (p.y < -2) p.y = height + 2;
        else if (p.y > height + 2) p.y = -2;

        ctx!.beginPath();
        ctx!.fillStyle = p.gold
          ? `rgba(195, 162, 85, ${p.alpha})`
          : `rgba(255, 255, 255, ${p.alpha})`;
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function frame() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);
      drawParticles(rect.width, rect.height);
      rafRef.current = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      drawParticles(rect.width, rect.height);
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [density, min, max]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
