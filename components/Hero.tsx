import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-coffee"
    >
      {/* ── FOTO DE FUNDO — Vanessa ancorada à esquerda ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Vanessa viajando"
          fill
          className="object-cover"
          style={{ objectPosition: '15% center' }}
          priority
        />
        {/* Overlay: esquerda mais transparente (Vanessa visível), direita mais escura (texto legível) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(14,9,5,0.25) 0%, rgba(14,9,5,0.55) 40%, rgba(14,9,5,0.82) 100%)',
          }}
        />
      </div>

      {/* ── CONTEÚDO — alinhado à direita ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="ml-auto max-w-xl text-right">

          {/* Pré-título */}
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-blush mb-10 opacity-90">
            Um clube de experiências para mulheres
          </p>

          {/* Título principal */}
          <h1 className="font-serif leading-none mb-8">
            <span
              className="block text-cream font-semibold"
              style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', letterSpacing: '-0.02em' }}
            >
              Entre
            </span>
            <span
              className="block italic font-semibold"
              style={{
                fontSize: 'clamp(4.5rem, 13vw, 10.5rem)',
                letterSpacing: '-0.03em',
                color: '#C08840',
                textShadow: '0 4px 60px rgba(192,136,64,0.4)',
              }}
            >
              Destinos
            </span>
          </h1>

          {/* Divisor ornamental — alinhado à direita */}
          <div className="flex items-center justify-end gap-4 mb-10">
            <div className="w-20 h-px bg-blush/40" />
            <svg className="w-3 h-3 text-blush/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>

          {/* Subtítulo */}
          <p
            className="font-serif italic text-cream/90 leading-snug mb-5"
            style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)' }}
          >
            Encontros para mulheres que vivem a viagem como forma de existir.
          </p>

          {/* Assinatura conceitual */}
          <p
            className="font-sans text-cream/55 leading-relaxed mb-12 font-light"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)' }}
          >
            Entre uma viagem e outra, a vida também pode ser destino.
          </p>

          {/* CTA */}
          <div className="flex justify-end">
            <a
              href="#encontros"
              className="bg-terracota text-cream font-sans text-xs tracking-[0.22em] uppercase px-9 py-4 rounded-full hover:bg-blush transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Quero participar do próximo encontro
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-blush/50 animate-pulse" />
      </div>
    </section>
  )
}
