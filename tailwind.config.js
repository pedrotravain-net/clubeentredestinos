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
        // Paleta Entre Destinos — contraste aumentado, menos bege
        cream:      '#FAF6EF', // fundo principal — branco quente
        linen:      '#F2E8D6', // fundo secundário claro
        sand:       '#E4D2B8', // seções alternadas
        terracota:  '#9C6520', // âmbar escuro — contraste forte nos CTAs
        blush:      '#C08840', // âmbar médio / hover
        mauve:      '#7A4860', // rosa velho escuro
        plum:       '#58224A', // ameixa intensa
        wine:       '#3C1430', // vinho profundo
        coffee:     '#0E0905', // quase preto quente — máximo contraste
        espresso:   '#261408', // texto escuro
        mocha:      '#5C3418', // texto terciário
        sage:       '#3E5E44', // verde oliva escuro
        petrol:     '#1E4850', // azul petróleo escuro
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
