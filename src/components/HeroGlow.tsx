'use client';

import { useEffect, useRef } from 'react';

export default function HeroGlow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const tickRef = useRef(0);

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

    resize();
    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    function drawGlow(width: number, height: number, tick: number) {
      const cx = width * 0.76;
      const cy = height * 0.30;
      const pulse = Math.sin(tick * 0.016);

      // Outer halo — soft warm white, ~2.5x previous
      const outerR = 290 + pulse * 18;
      const outerGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, outerR);
      outerGrad.addColorStop(0, `rgba(255, 240, 210, ${0.14 + pulse * 0.04})`);
      outerGrad.addColorStop(1, 'rgba(255, 240, 210, 0)');
      ctx!.fillStyle = outerGrad;
      ctx!.beginPath();
      ctx!.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx!.fill();

      // Mid halo — pale white-blue
      const midR = 100 + pulse * 24;
      const midGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, midR);
      midGrad.addColorStop(0, `rgba(220, 230, 255, ${0.22 + pulse * 0.06})`);
      midGrad.addColorStop(1, 'rgba(220, 230, 255, 0)');
      ctx!.fillStyle = midGrad;
      ctx!.beginPath();
      ctx!.arc(cx, cy, midR, 0, Math.PI * 2);
      ctx!.fill();

      // Inner core — bright white breathing circle
      const innerR = 50 + pulse * 32;
      const innerGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, innerR);
      innerGrad.addColorStop(0, `rgba(255, 255, 255, ${0.45 + pulse * 0.15})`);
      innerGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx!.fillStyle = innerGrad;
      ctx!.beginPath();
      ctx!.arc(cx, cy, innerR, 0, Math.PI * 2);
      ctx!.fill();
    }

    function frame() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);
      drawGlow(rect.width, rect.height, tickRef.current);
      tickRef.current += 1;
      rafRef.current = requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      drawGlow(rect.width, rect.height, 0);
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
