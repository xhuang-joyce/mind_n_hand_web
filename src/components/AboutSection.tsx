import Reveal from './Reveal';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const CONTACT_EMAIL = 'hello@minds-and-hands.com';

export default function AboutSection() {
  return (
    <section className="relative py-[88px] md:py-[128px] px-6">
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <Reveal as="div" className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left — narrative */}
            <div className="md:col-span-7">
              <p className="eyebrow">About the study</p>
              <h2
                className="text-white font-extrabold mt-3 tracking-tight"
                style={{
                  fontSize: 'clamp(24px, 3.2vw, 34px)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.015em',
                }}
              >
                A study at MIT&apos;s Mens, Manus, and Machina (M3S).
              </h2>
              <p
                className="mt-5 text-white"
                style={{ fontSize: '16px', lineHeight: 1.65 }}
              >
                We study how researchers across disciplines engage with AI throughout their
                work, and what that means for the future of knowledge-making.
              </p>
            </div>

            {/* Right — credentials key/value */}
            <div className="md:col-span-5">
              <img
                src={`${BASE}/pics/m3s_logo.png`}
                alt="M3S Lab"
                className="h-20 md:h-24 w-auto select-none mb-6 opacity-95"
                draggable={false}
              />
              <dl className="grid grid-cols-1 gap-y-5">
                <CredRow
                  label="Ethics approval"
                  value="MIT COUHES IRB Protocol #E-7647"
                />
                <CredRow
                  label="Your data"
                  value="Responses are anonymous and may inform published academic research."
                />
                <CredRow
                  label="Contact"
                  value={
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-white hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  }
                />
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
      <dt className="eyebrow" style={{ fontSize: '11px' }}>
        {label}
      </dt>
      <dd
        className="mt-1.5 text-white"
        style={{ fontSize: '14.5px', lineHeight: 1.55 }}
      >
        {value}
      </dd>
    </div>
  );
}
