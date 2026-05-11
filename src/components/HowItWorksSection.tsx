import ParticleField from './ParticleField';
import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Answer the survey',
    body:
      "Break down your stages of research. Rate how much AI is involved — and how much you'd want it to be. Takes about 5 minutes.",
  },
  {
    n: '02',
    title: 'See your radar chart',
    body:
      'Instantly after you submit — a personalized radar chart shows your actual vs. ideal AI collaboration profile.',
  },
  {
    n: '03',
    title: 'Discover your type',
    body:
      "You're matched to 1 of 18 researcher profiles that captures how you think and work alongside AI.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-[64px] md:py-[120px] px-6">
      <ParticleField />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <Reveal as="div" className="text-center mb-16">
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            How it works
          </h2>
        </Reveal>

        {/* Connector line — desktop only */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-0 right-0 top-[14px] h-px"
            style={{ background: '#ffffff' }}
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delayMs={i * 150} className="relative">
                <div
                  className="font-medium mb-4 inline-block bg-navy pr-3 text-white"
                  style={{ fontSize: '28px', lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <h3
                  className="text-white font-medium mb-2"
                  style={{ fontSize: '18px' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-white"
                  style={{ fontSize: '15px', lineHeight: 1.65 }}
                >
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
