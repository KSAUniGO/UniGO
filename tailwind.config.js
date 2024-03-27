/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['/node_modules/flowbite/**/*.js', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        container: '#f4f4fb',
        primary: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#ccdceb',
          300: '#9fbfda',
          400: '#6c9cc4',
          500: '#487eab',
          600: '#376692',
          700: '#2e5376',
          800: '#294763',
          900: '#263c54',
          950: '#1a2737'
        }
      }
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [require('flowbite/plugin')]
}
