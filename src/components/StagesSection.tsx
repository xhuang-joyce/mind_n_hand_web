import Reveal from './Reveal';

export default function StagesSection() {
  return (
    <section className="relative py-[72px] md:py-[112px] px-6">
      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <Reveal as="div">
          <p className="eyebrow">Tailored to your work</p>
          <h2
            className="text-white font-extrabold mt-4 tracking-tight"
            style={{
              fontSize: 'clamp(26px, 3.6vw, 38px)',
              lineHeight: 1.14,
              letterSpacing: '-0.015em',
            }}
          >
            The survey adapts to your research stages.
          </h2>
          <p
            className="mt-5 mx-auto text-white"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              maxWidth: '640px',
            }}
          >
            Research looks different across fields.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
