import ParticleField from './ParticleField';
import Reveal from './Reveal';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-[100px] px-6">
      <ParticleField />
      <div className="relative z-10 mx-auto max-w-[720px] text-center">
        <Reveal as="div">
          <img
            src={`${BASE}/pics/m3s_logo.png`}
            alt="M3S Lab"
            className="h-16 md:h-20 w-auto mx-auto mb-10 select-none"
            draggable={false}
          />
          <p
            className="text-white"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            Minds and Hands in Research is a study at Mens, Manus, and Machina (M3S), MIT.
          </p>
          <p
            className="text-white mt-4"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            We study how researchers across disciplines engage with AI throughout their work
            — and what that means for the future of knowledge-making.
          </p>
          <p
            className="text-white mt-8"
            style={{ fontSize: '14px', lineHeight: 1.6 }}
          >
            Your responses are anonymous. This study is approved under MIT COUHES IRB Protocol
            #E-7647.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
