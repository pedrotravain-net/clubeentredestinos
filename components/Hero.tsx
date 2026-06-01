export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        // Gradiente parchment-dourado — inspirado na leveza editorial do AstroJourney
        background: 'linear-gradient(155deg, #F8F2E8 0%, #EDE0C8 45%, #E2CBA8 100%)',
      }}
    >
      {/* Manchas de luz decorativas — atmosfera suave */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 15% 85%, rgba(193,149,88,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 85% 15%, rgba(107,51,85,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 50% 50%, rgba(155,112,128,0.07) 0%, transparent 65%)
          `,
        }}
      />

      {/*
        IMAGEM DE FUNDO (opcional):
        Para adicionar uma foto de fundo, descomente o bloco abaixo,
        coloque a imagem em /public/images/hero-bg.jpg e ajuste a opacidade.

        import Image from 'next/image'
        <Image
          src="/images/hero-bg.jpg"
          fill
          className="object-cover opacity-15"
          alt=""
          priority
        />
      */}

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Pré-título */}
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-terracota mb-8">
          Um clube de experiências para mulheres
        </p>

        {/* Título principal */}
        <h1 className="font-serif leading-[0.9] mb-8">
          <span className="block text-7xl md:text-9xl text-coffee">Entre</span>
          <span className="block text-7xl md:text-9xl italic text-terracota">Destinos</span>
        </h1>

        {/* Divisor ornamental */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-20 h-px bg-terracota/35" />
          <svg className="w-4 h-4 text-terracota/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="w-20 h-px bg-terracota/35" />
        </div>

        {/* Subtítulo oficial */}
        <p className="font-serif text-xl md:text-2xl italic text-espresso leading-relaxed mb-5 max-w-2xl mx-auto">
          Encontros para mulheres que vivem a viagem como forma de existir.
        </p>

        {/* Assinatura conceitual */}
        <p className="font-sans text-base md:text-lg text-mocha leading-relaxed mb-14 max-w-xl mx-auto font-light">
          Entre uma viagem e outra, a vida também pode ser destino.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#inscricao"
            className="bg-terracota text-cream font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-mocha transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Quero participar do próximo encontro
          </a>
          <a
            href="#encontros"
            className="border border-espresso/35 text-espresso font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:border-terracota hover:text-terracota transition-all duration-300 hover:-translate-y-0.5"
          >
            Conhecer os encontros
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-terracota/40 animate-pulse" />
      </div>
    </section>
  )
}
