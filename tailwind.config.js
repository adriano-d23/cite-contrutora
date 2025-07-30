/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cite-primary': '#1E3A8A', // Azul corporativo
        'cite-secondary': '#DC2626', // Vermelho da logo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte personalizada
      },
    },
  },
  plugins: [],
}
