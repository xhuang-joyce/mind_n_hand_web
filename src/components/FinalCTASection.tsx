import ParticleField from './ParticleField';
import Reveal from './Reveal';

const SURVEY_URL = 'https://heads-and-hands-survey.onrender.com/';
// TODO: confirm researcher contact email
const CONTACT_EMAIL = 'mailto:heads-and-hands@mit.edu';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-[120px] px-6">
      <ParticleField />
      <div className="relative z-10 mx-auto max-w-[760px] text-center">
        <Reveal as="div">
          <h2
            className="text-white font-medium"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}
          >
            Ready to find your type?
          </h2>
          <p
            className="mt-4 text-white"
            style={{ fontSize: '18px', marginBottom: '40px' }}
          >
            It takes about 5 minutes.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white text-navy font-medium rounded transition-[background,transform] duration-150 active:scale-[0.98] hover:bg-white/90"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              Participate in the study →
            </a>
            <a
              href={CONTACT_EMAIL}
              className="inline-block text-center text-white font-medium rounded border border-white transition-[background,transform] duration-150 active:scale-[0.98] hover:bg-white/10"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              Contribute to the research →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
