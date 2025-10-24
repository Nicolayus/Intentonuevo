/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#eaf6ff',
          200: '#cfeaffe',
          300: '#9cd9fb',
          400: '#5bb8f3',
          500: '#2b93e0',
          600: '#1f6fb6',
          700: '#165184',
          800: '#0f3656',
          900: '#081a2b'
        }
        ,
        accent: {
          50: '#f2fbf7',
          100: '#dff8ef',
          200: '#bff0df',
          300: '#86e1bf',
          400: '#40cfa0',
          500: '#11b389',
          600: '#0c8f67',
          700: '#095b44',
          800: '#053528',
          900: '#021710'
        },
        warm: {
          50: '#fff7f2',
          100: '#fff0e6',
          200: '#ffd9c7',
          300: '#ffb08a',
          400: '#ff8a4f',
          500: '#ff6b2a',
          600: '#e05015',
          700: '#a63a0f',
          800: '#66220a',
          900: '#331106'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft-xl': '0 10px 30px rgba(13, 38, 66, 0.08)'
      }
    },
  },
  plugins: [],
}