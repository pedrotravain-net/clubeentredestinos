import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-coffee"
    >
      {/* ── FOTO DE FUNDO — Vanessa na Islândia ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/vanessa-islandia.jpg"
          alt="Vanessa viajando na Islândia"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(14,9,5,0.75) 0%, rgba(14,9,5,0.55) 50%, rgba(62,20,48,0.60) 100%)',
          }}
        />
      </div>

      {/* ── CONTEÚDO — centralizado ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <p className="font-sans text-xs tracking-[0.4em] uppercase text-blush mb-10 opacity-90">
          Um clube de experiências para mulheres
        </p>

        <h1 className="font-serif leading-none mb-8">
          <span
            className="block text-cream font-semibold"
            style={{ fontSize: 'clamp(4.5rem, 14vw, 10rem)', letterSpacing: '-0.02em' }}
          >
            Entre
          </span>
          <span
            className="block italic font-semibold"
            style={{
              fontSize: 'clamp(5rem, 16vw, 11.5rem)',
              letterSpacing: '-0.03em',
              color: '#C08840',
              textShadow: '0 4px 60px rgba(192,136,64,0.4)',
            }}
          >
            Destinos
          </span>
        </h1>

        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="w-24 h-px bg-blush/40" />
          <svg className="w-3 h-3 text-blush/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <div className="w-24 h-px bg-blush/40" />
        </div>

        <p
          className="font-serif italic text-cream/90 leading-snug mb-5 mx-auto"
          style={{ fontSize: 'clamp(1.3rem, 3.2vw, 1.9rem)', maxWidth: '40rem' }}
        >
          Encontros para mulheres que vivem a viagem como forma de existir.
        </p>

        <p
          className="font-sans text-cream/55 leading-relaxed mb-14 font-light mx-auto"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', maxWidth: '32rem' }}
        >
          Entre uma viagem e outra, a vida também pode ser destino.
        </p>

        <div className="flex justify-center">
          <a
            href="#encontros"
            className="bg-terracota text-cream font-sans text-xs tracking-[0.22em] uppercase px-10 py-4 rounded-full hover:bg-blush transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Quero participar do próximo encontro
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-blush/50 animate-pulse" />
      </div>
    </section>
  )
}
