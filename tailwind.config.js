/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
            './dist/index.html'
          ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'base-blue': {
          100: '#6abaf7',
          200: '#53b4ff',
          300: '#2279bd',
          400: '#1a639b',
          500: '#0019a7',
        },
        'pink': {
          350: '#f797c9',
        }
      },
      fontSize: {
        normal: '.95rem',
        larger: '1.05rem',
      },
      minWidth: {
        nav: '200px',
      },
      width: {
        nav: '300px',
        16.5: '75px',
        custom: '46%',
        0.75: '75px',
      },
      height: {
        16.5: '75px',
      },
      margin: {
        96.5: '400px'
      }
      
    },

  },
  plugins: [],
}

