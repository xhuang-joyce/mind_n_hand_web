'use client';

import { useEffect, useRef } from 'react';
import ParticleField from './ParticleField';
import HeroGlow from './HeroGlow';

const SURVEY_URL = 'https://heads-and-hands-survey.onrender.com/';
// TODO: confirm researcher contact email
const CONTACT_EMAIL = 'mailto:heads-and-hands@mit.edu';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      rootRef.current?.classList.add('hero-in');
    }, 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-navy"
    >
      <img
        src={`${BASE}/pics/background.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_right] select-none"
        draggable={false}
      />

      <HeroGlow />
      <ParticleField />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[640px] pl-8 md:pl-20 pr-8">
          <img
            src={`${BASE}/pics/m3s_logo.png`}
            alt="M3S Lab"
            className="hero-fade h-20 md:h-24 w-auto mb-10 select-none"
            style={{ transitionDelay: '0ms', transitionDuration: '700ms' }}
            draggable={false}
          />

          <h1
            className="text-white font-medium leading-[1.1]"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            <span
              className="hero-fade block"
              style={{ transitionDelay: '150ms', transitionDuration: '800ms' }}
            >
              Minds &amp; Hands
            </span>
            <span
              className="hero-fade block"
              style={{ transitionDelay: '280ms', transitionDuration: '800ms' }}
            >
              in Research Process
            </span>
          </h1>

          <p
            className="hero-fade mt-7 text-white"
            style={{
              fontSize: 'clamp(20px, 2.2vw, 28px)',
              lineHeight: 1.5,
              maxWidth: '560px',
              transitionDelay: '400ms',
              transitionDuration: '700ms',
            }}
          >
            A study of how researchers across disciplines think and work alongside AI.
          </p>

          <div
            className="hero-fade mt-10 flex flex-col gap-2.5 w-full max-w-[340px]"
            style={{ transitionDelay: '540ms', transitionDuration: '600ms' }}
          >
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-navy font-medium rounded transition-[background,transform] duration-150 active:scale-[0.98] hover:bg-white/90"
              style={{ padding: '14px 24px', fontSize: '15px' }}
            >
              Participate in the study →
            </a>
            <a
              href={CONTACT_EMAIL}
              className="block text-center text-white font-medium rounded border border-white transition-[background,transform] duration-150 active:scale-[0.98] hover:bg-white/10"
              style={{ padding: '14px 24px', fontSize: '15px' }}
            >
              Contribute to the research →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
