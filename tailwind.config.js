/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // add fonts here
  // theme: {
  //   fontFamily: {
  //     sans: ['Roboto'],
  //     mono: ['Fira Code'],
  //     serif: ['Playfair Display'],
  //   },
  //   extend: {},
  // },
  plugins: [
    require('@tailwindcss/forms'),
    '@tailwindcss/typography',
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#570df8',
          'primary-content': '#ffffff',
          secondary: '#f000b8',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#661AE6',
          'primary-content': '#ffffff',
          secondary: '#D926AA',
          'secondary-content': '#ffffff',
          accent: '#1FB2A5',
          'accent-content': '#ffffff',
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#111827',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#A6ADBB',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
