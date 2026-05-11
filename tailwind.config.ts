import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#082049',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['64px', { lineHeight: '1.1' }],
        section: ['40px', { lineHeight: '1.2' }],
        step: ['28px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}

export default config
