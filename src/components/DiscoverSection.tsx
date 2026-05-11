import ArchetypeRadar, { type RadarPoint } from './ArchetypeRadar';
import ParticleField from './ParticleField';
import Reveal from './Reveal';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const PLACEHOLDER_RADAR: RadarPoint[] = [
  { stage: 1, q3Actual: 35, q3Desired: 50 },
  { stage: 2, q3Actual: 72, q3Desired: 60 },
  { stage: 3, q3Actual: 20, q3Desired: 40 },
  { stage: 4, q3Actual: 55, q3Desired: 55 },
  { stage: 5, q3Actual: 10, q3Desired: 25 },
  { stage: 6, q3Actual: 80, q3Desired: 70 },
  { stage: 7, q3Actual: 60, q3Desired: 65 },
  { stage: 8, q3Actual: 45, q3Desired: 30 },
];

function PadlockOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </div>
  );
}

export default function DiscoverSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-[64px] md:py-[120px] px-6">
      <ParticleField />
      <div className="relative z-10 mx-auto max-w-[860px]">
        <Reveal as="div" className="text-center mb-14">
          <h2 className="text-white font-medium text-[32px] md:text-[40px] leading-tight">
            What you&apos;ll discover
          </h2>
          <p
            className="mt-4 text-white text-base md:text-lg mx-auto"
            style={{ lineHeight: 1.7, maxWidth: '460px' }}
          >
            Complete the survey.
            <br />
            See your researcher profile.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — Radar teaser */}
          <Reveal
            as="article"
            delayMs={0}
            className="rounded-xl p-8"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <div className="relative w-full h-[360px]">
              <div
                className="absolute inset-0"
                style={{
                  filter: 'blur(5px)',
                  opacity: 0.6,
                  pointerEvents: 'none',
                }}
              >
                <ArchetypeRadar stages={PLACEHOLDER_RADAR} locale="en" />
              </div>
              <PadlockOverlay />
            </div>

            <div className="mt-6">
              <p
                className="uppercase text-white"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                }}
              >
                Your AI workflow profile
              </p>
              <h3 className="text-white font-medium mt-2" style={{ fontSize: '20px' }}>
                Your research stage radar chart
              </h3>
              <p
                className="mt-3 text-white"
                style={{ fontSize: '15px', lineHeight: 1.6 }}
              >
                See how your actual AI use compares to your ideal — across every stage of the
                research process.
              </p>
            </div>
          </Reveal>

          {/* Card 2 — Archetype image teaser */}
          {/* TODO: project lead to confirm which archetype image (2.png or 7.png) to use in S2 */}
          <Reveal
            as="article"
            delayMs={120}
            className="rounded-xl p-8"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <div className="relative w-full h-[360px] overflow-hidden rounded-md">
              <img
                src={`${BASE}/pics/2.png`}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                style={{
                  filter: 'blur(5px)',
                  opacity: 0.6,
                  pointerEvents: 'none',
                }}
                draggable={false}
              />
              <PadlockOverlay />
            </div>

            <div className="mt-6">
              <p
                className="uppercase text-white"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                }}
              >
                Your researcher archetype
              </p>
              <h3 className="text-white font-medium mt-2" style={{ fontSize: '20px' }}>
                1 of 18 types
              </h3>
              <p
                className="mt-3 text-white"
                style={{ fontSize: '15px', lineHeight: 1.6 }}
              >
                Discover which of 18 research profile matches how you think and work with AI.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
