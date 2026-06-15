import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1E3F',
          900: '#050F23',
          800: '#0A1E3F',
          700: '#102A55',
          600: '#1A3A6E',
        },
        sky: {
          accent: '#7CC4FF',
        },
        azure: {
          DEFAULT: '#3E8BFF',
        },
        cyan: {
          soft: '#67E8F9',
        },
        indigo: {
          soft: '#8B9DFF',
        },
        gold: {
          DEFAULT: '#D4A845',
          soft: '#E9C97A',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '1.2', letterSpacing: '0.18em' }],
        hero: ['64px', { lineHeight: '1.05' }],
        section: ['40px', { lineHeight: '1.15' }],
        step: ['28px', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(90deg, #67E8F9 0%, #3E8BFF 55%, #8B9DFF 100%)',
        'cta-gradient':
          'linear-gradient(135deg, #3E8BFF 0%, #5A6FFF 50%, #8B9DFF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
