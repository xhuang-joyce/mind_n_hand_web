import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Answer the survey',
    body:
      "Break down your stages of research. Rate how much AI is involved — and how much you'd want it to be.",
  },
  {
    n: '02',
    title: 'See your radar chart',
    body:
      'Right after you submit, a personalized radar chart shows your actual vs. ideal AI collaboration across stages.',
  },
  {
    n: '03',
    title: 'Discover your profile',
    body:
      "You're matched to one of sixteen profiles that captures how you think and work alongside AI.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-[80px] md:py-[120px] px-6">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <Reveal as="div" className="text-center mb-14 md:mb-16">
          <p className="eyebrow">How it works</p>
          <h2
            className="text-white font-extrabold mt-4 tracking-tight"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
            }}
          >
            Three steps, about five minutes.
          </h2>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delayMs={i * 140}>
              <p
                className="font-extrabold accent-text"
                style={{
                  fontSize: 'clamp(44px, 5.5vw, 64px)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {s.n}
              </p>
              <h3
                className="text-white font-bold mt-4"
                style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-white"
                style={{ fontSize: '15px', lineHeight: 1.65 }}
              >
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
