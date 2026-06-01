/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Entre Destinos — inspirada em AstroJourney: creme parchment + dourado champanhe + escuro profundo
        cream:      '#F8F2E8', // fundo principal — creme parchment quente
        linen:      '#F1E8D8', // fundo secundário claro
        sand:       '#E8D8C0', // seções alternadas — areia dourada
        terracota:  '#C19558', // cor primária — dourado champanhe quente (CTAs, destaques)
        blush:      '#D4B078', // tom mais claro do dourado
        mauve:      '#9B7080', // rosa empoeirado
        plum:       '#6B3355', // ameixa escura
        wine:       '#4E2038', // vinho profundo
        coffee:     '#1C1210', // texto / fundo escuro — espresso profundo
        espresso:   '#3A2218', // texto secundário escuro
        mocha:      '#7A5238', // texto terciário — marrom médio
        sage:       '#5A7860', // verde oliva
        petrol:     '#3A6870', // azul petróleo
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
