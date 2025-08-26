/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.vue',
    './resources/**/*.js',
    './resources/**/*.ts',
    './resources/**/*.blade.php',
  ],
  theme: {
    extend: {
      keyframes: {
        logoMarquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        // duration comes from CSS var --dur
        'logo-marquee': 'logoMarquee var(--dur,30s) linear infinite',
      },
    },
  },
  plugins: [],
}
