/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './public/assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface-dim': 'var(--bg-surface)',
        surface: 'var(--bg-surface)',
        'surface-container-lowest': 'var(--bg-surface-lowest)',
        'surface-container-low': 'var(--bg-surface-low)',
        'surface-container': 'var(--bg-surface-container)',
        'surface-container-high': 'var(--bg-surface-high)',
        'surface-container-highest': 'var(--bg-surface-highest)',
        primary: 'var(--color-accent)',
        'primary-container': 'var(--color-accent-ring)',
        secondary: '#10b981',
        outline: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
