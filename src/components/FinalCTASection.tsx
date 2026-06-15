import Reveal from './Reveal';

const SURVEY_URL = 'https://heads-and-hands-survey.onrender.com/';
const CONTACT_EMAIL = 'mailto:hello@minds-and-hands.com';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-[112px] md:py-[144px] px-6">
      {/* Soft blue glow behind the CTA */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          style={{
            width: 720,
            height: 360,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(62,139,255,0.28) 0%, rgba(62,139,255,0) 65%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[760px] text-center">
        <Reveal as="div">
          <h2
            className="text-white font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(30px, 4.4vw, 46px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Ready to see your profile?
          </h2>
          <p
            className="mt-5 text-white"
            style={{ fontSize: '17px', lineHeight: 1.55 }}
          >
            It takes about five minutes — and it&apos;s anonymous.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Participate in the study →
            </a>
            <a href={CONTACT_EMAIL} className="btn-ghost">
              Contribute to the research →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
