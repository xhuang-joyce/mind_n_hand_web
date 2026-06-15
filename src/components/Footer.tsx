const CONTACT_EMAIL = 'hello@minds-and-hands.com';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
    >
      <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
        <p
          className="text-white"
          style={{ fontSize: '12.5px', letterSpacing: '0.01em' }}
        >
          Minds &amp; Hands in Research · MIT M3S
        </p>
        <p
          className="text-white"
          style={{ fontSize: '12.5px', letterSpacing: '0.01em' }}
        >
          IRB Protocol #E-7647 ·{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
