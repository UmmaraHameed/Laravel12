/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.{vue,js,ts,jsx,tsx}',
    './index.html',
  ],
  safelist: [
    'animate-ticker-10','animate-ticker-15','animate-ticker-20','animate-ticker-30',
    'animate-logo-marquee-10','animate-logo-marquee-15','animate-logo-marquee-20','animate-logo-marquee-30',
  ],
  theme: {
    extend: {
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'logo-marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'ticker-10': 'ticker 10s linear infinite',
        'ticker-15': 'ticker 15s linear infinite',
        'ticker-20': 'ticker 20s linear infinite',
        'ticker-30': 'ticker 30s linear infinite',
        'logo-marquee-10': 'logo-marquee 10s linear infinite',
        'logo-marquee-15': 'logo-marquee 15s linear infinite',
        'logo-marquee-20': 'logo-marquee 20s linear infinite',
        'logo-marquee-30': 'logo-marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
