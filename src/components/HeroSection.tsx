'use client';

import { useEffect, useRef } from 'react';
import HeroGlow from './HeroGlow';

const SURVEY_URL = 'https://heads-and-hands-survey.onrender.com/';
const CONTRIBUTE_URL = 'https://forms.gle/dnudYueidzQj46sh6';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      rootRef.current?.classList.add('hero-in');
    }, 200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background artwork — clean text-free hand+brain ink-wash plate */}
      <img
        src={`${BASE}/pics/background.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_right] select-none"
        draggable={false}
      />

      {/* Brain glow — sits on top of the actual brain in the artwork */}
      <HeroGlow />

      {/* Ambient slow-drifting blue blobs (pure-blue family) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="blob blob-a"
          style={{
            width: 520,
            height: 520,
            left: '-8%',
            top: '12%',
            background:
              'radial-gradient(circle, rgba(62,139,255,0.32) 0%, rgba(62,139,255,0) 65%)',
          }}
        />
        <div
          className="blob blob-b"
          style={{
            width: 460,
            height: 460,
            left: '38%',
            top: '54%',
            background:
              'radial-gradient(circle, rgba(124,196,255,0.22) 0%, rgba(124,196,255,0) 65%)',
          }}
        />
        <div
          className="blob blob-c"
          style={{
            width: 380,
            height: 380,
            right: '4%',
            bottom: '-6%',
            background:
              'radial-gradient(circle, rgba(30,95,204,0.22) 0%, rgba(30,95,204,0) 65%)',
          }}
        />
      </div>

      {/* Readability scrim — darker on the left where text sits,
          fading to transparent over the artwork on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,15,35,0.92) 0%, rgba(10,25,55,0.7) 38%, rgba(10,25,55,0.25) 62%, rgba(10,25,55,0) 100%)',
        }}
      />
      {/* Mobile vertical scrim */}
      <div
        aria-hidden="true"
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,15,35,0.55) 0%, rgba(5,15,35,0.85) 60%, rgba(5,15,35,0.95) 100%)',
        }}
      />
      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,30,63,0) 0%, var(--navy-mid) 100%)',
        }}
      />

      {/* Top nav (transparent over hero) */}
      <header className="relative z-20">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 pt-6 md:pt-8 flex items-center">
          <img
            src={`${BASE}/pics/m3s_logo.png`}
            alt="M3S Lab — Mens, Manus, and Machina"
            className="h-24 md:h-28 w-auto select-none"
            draggable={false}
          />
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="max-w-[640px]">
          <p
            className="hero-fade eyebrow"
            style={{ transitionDelay: '120ms', transitionDuration: '700ms' }}
          >
            A study of researchers &amp; AI
          </p>

          <h1
            className="text-white mt-5 font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(40px, 6.2vw, 72px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
            }}
          >
            <span
              className="hero-fade block"
              style={{ transitionDelay: '220ms', transitionDuration: '800ms' }}
            >
              How researchers think and work
            </span>
            <span
              className="hero-fade block accent-text"
              style={{ transitionDelay: '360ms', transitionDuration: '800ms' }}
            >
              alongside AI.
            </span>
          </h1>

          <p
            className="hero-fade mt-7 text-white"
            style={{
              fontSize: 'clamp(17px, 1.5vw, 20px)',
              lineHeight: 1.55,
              maxWidth: '540px',
              transitionDelay: '500ms',
              transitionDuration: '700ms',
            }}
          >
            Map how much AI is really involved and how much you&apos;d want it to be across
            every stage of research, from framing the question to writing it up.
          </p>

          <div
            className="hero-fade mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ transitionDelay: '640ms', transitionDuration: '600ms' }}
          >
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Participate in the study →
            </a>
            <a
              href={CONTRIBUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Contribute to the research →
            </a>
          </div>

          {/* Research-expectation meta line */}
          <div
            className="hero-fade mt-7"
            style={{ transitionDelay: '780ms', transitionDuration: '600ms' }}
          >
            <p
              className="text-white"
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                letterSpacing: '0.01em',
              }}
            >
              ~5 minutes · anonymous · a research study.
            </p>
            <p
              className="mt-1 text-white"
              style={{
                fontSize: '12.5px',
                lineHeight: 1.6,
              }}
            >
              MIT COUHES IRB Protocol #E-7647.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
