/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#19141C',
        'primary-focus': '#140d16',
        'primary-content': '#B3C5EF',
        dark: '#16121A',
        content: '#334155',
        'content-dark': '#94a3b8',
        bgcontent: '#1A161F',
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    //darkTheme: 'dark',
  },
  plugins: [
    require('@tailwindcss/forms'),
    '@tailwindcss/typography',
    require('daisyui'),
  ],
};
