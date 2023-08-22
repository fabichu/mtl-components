const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'striped': `linear-gradient(
          45deg,
          #ffffff26 25%,
          #0000 0,
          #0000 50%,
          #ffffff26 0,
          #ffffff26 75%,
          #0000 0,
          #0000
        )`
      }),
      backgroundSize: () => ({
        'striped': '1rem 1rem'
      })
    },
  },
  plugins: [],
  darkMode: 'class'
};
