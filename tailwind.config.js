/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Canvas fixo 1280×720 escalado — breakpoints colapsados para 0px
    // assim sm:/md:/lg: sempre ativam independente do viewport real
    screens: {
      'sm':  '0px',
      'md':  '0px',
      'lg':  '0px',
      'xl':  '0px',
      '2xl': '0px',
    },
    extend: {
      colors: {
        tm: {
          orange: '#FF6B00',
          'orange-light': '#FF8C33',
          'orange-dark': '#CC5500',
          black: '#0A0A0A',
          graphite: '#1C1C1E',
          'graphite-light': '#2C2C2E',
          'graphite-mid': '#3A3A3C',
          gray: '#8E8E93',
          'gray-light': '#AEAEB2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
