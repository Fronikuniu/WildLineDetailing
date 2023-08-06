const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkC: {
          100: '#0f222a',
        },
        primaryC: {
          100: '#1c4e57',
        },
        grayC: {
          100: '#b4baba',
        },
        lightC: {
          100: '#dce7ed',
        },
        yellowC: {
          100: '#cbcd3d',
        },
        blackC: {
          100: '#202020',
        },
        whiteC: {
          100: '#e6e6e6',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
