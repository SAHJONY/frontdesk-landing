import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        elev: 'var(--elev)',
        line: 'var(--line)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        bad: 'var(--bad)',
        info: 'var(--info)',
      },
      borderRadius: {
        xs: 'var(--r-xs)',
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
      },
      boxShadow: {
        brand1: 'var(--sh-1)',
        brand2: 'var(--sh-2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  safelist: [
    'bg-brand-600',
    'text-brand-400',
    'bg-bg',
    'text-text',
    'bg-panel',
    { pattern: /(bg|text|border|from|to)-(brand|slate|indigo|cyan)-(50|100|200|300|400|500|600|700|800|900)/ },
  ],
  plugins: [],
};

export default config;

