import ArchetypeRadar, { type RadarPoint } from './ArchetypeRadar';
import Reveal from './Reveal';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SAMPLE_RADAR: RadarPoint[] = [
  { stage: 1, q3Actual: 35, q3Desired: 50 },
  { stage: 2, q3Actual: 72, q3Desired: 60 },
  { stage: 3, q3Actual: 28, q3Desired: 45 },
  { stage: 4, q3Actual: 55, q3Desired: 55 },
  { stage: 5, q3Actual: 18, q3Desired: 30 },
  { stage: 6, q3Actual: 80, q3Desired: 68 },
  { stage: 7, q3Actual: 62, q3Desired: 70 },
  { stage: 8, q3Actual: 45, q3Desired: 35 },
];

const ARCHETYPE_TEASERS = ['Seeker.png', 'Wayfarer.png', 'Trailblazer.png', 'Forger.png'];

export default function DiscoverSection() {
  return (
    <section className="relative py-[80px] md:py-[128px] px-6">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <Reveal as="div" className="text-center mb-14 md:mb-16">
          <p className="eyebrow">What you&apos;ll discover</p>
          <h2
            className="text-white font-extrabold mt-4 tracking-tight"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
            }}
          >
            Complete the survey.<br />
            See your researcher profile.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 — Radar / workflow profile */}
          <Reveal as="article" delayMs={0} className="glass-card p-7 md:p-8">
            <p className="eyebrow">Your AI workflow profile</p>
            <h3
              className="text-white font-bold mt-3"
              style={{ fontSize: '22px', lineHeight: 1.25, letterSpacing: '-0.01em' }}
            >
              Your research-stage radar chart
            </h3>
            <p
              className="mt-3 text-white"
              style={{ fontSize: '15px', lineHeight: 1.6 }}
            >
              See how your actual AI use compares to your ideal across every stage of the
              research process.
            </p>

            <div className="relative w-full mt-5" style={{ height: 320 }}>
              <ArchetypeRadar stages={SAMPLE_RADAR} locale="en" compact />
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center gap-5 text-[12.5px] text-white">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: 22,
                    height: 0,
                    borderTop: '2px solid #7CC4FF',
                  }}
                />
                Actual use
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: 22,
                    height: 0,
                    borderTop: '2px dashed #3E8BFF',
                  }}
                />
                Ideal use
              </span>
              <span className="ml-auto text-white" style={{ fontSize: '11.5px' }}>
                Sample
              </span>
            </div>
          </Reveal>

          {/* Card 2 — Archetype teaser (blurred behind glass) */}
          <Reveal as="article" delayMs={120} className="glass-card p-7 md:p-8">
            <p className="eyebrow">Your researcher archetype</p>
            <h3
              className="text-white font-bold mt-3"
              style={{ fontSize: '22px', lineHeight: 1.25, letterSpacing: '-0.01em' }}
            >
              One of sixteen profiles
            </h3>
            <p
              className="mt-3 text-white"
              style={{ fontSize: '15px', lineHeight: 1.6 }}
            >
              A shareable read on how you think and work alongside AI.
            </p>

            {/* Blurred 4-up archetype grid, behind a frosted glass layer */}
            <div
              className="relative w-full mt-5 overflow-hidden rounded-lg"
              style={{ height: 320 }}
            >
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2">
                {ARCHETYPE_TEASERS.map((file) => (
                  <div
                    key={file}
                    className="relative overflow-hidden rounded-md"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <img
                      src={`${BASE}/pics/${file}`}
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="w-full h-full object-cover select-none"
                      style={{
                        filter: 'blur(14px) saturate(115%)',
                        transform: 'scale(1.15)',
                        opacity: 0.85,
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-md pointer-events-none"
                      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                    />
                  </div>
                ))}
              </div>

              {/* Frosted overlay so it reads as "behind glass" */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10,25,55,0.30) 0%, rgba(10,25,55,0.55) 100%)',
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                }}
              />

              {/* Caption pinned bottom-left, crisp on top of blur */}
              <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-3 pointer-events-none">
                <p
                  className="text-white"
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 500,
                    lineHeight: 1.45,
                    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                  }}
                >
                  Revealed at the end of the survey.
                </p>
                <span className="eyebrow text-white" style={{ fontSize: '11px' }}>
                  1 of 16
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
