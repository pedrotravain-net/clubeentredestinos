import Image from 'next/image'

const photos = [
  { src: '/images/evento-yoga-foto1.jpg', alt: 'Participantes no Yoga com Vinho — Entre Destinos' },
  { src: '/images/evento-yoga-foto2.jpg', alt: 'Momento de conexão no primeiro encontro — Entre Destinos' },
]

export default function PastEvents() {
  return (
    <section id="ja-aconteceu" className="py-28 md:py-40 bg-espresso overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-blush/70 mb-5">
            Primeiro encontro
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
            Yoga com Vinho —<br />
            <em className="text-blush italic not-italic">e foi lindo demais</em>
          </h2>
          <div className="flex justify-center mt-6 mb-8">
            <div className="w-10 h-px bg-blush/40" />
          </div>
          <p className="font-sans text-cream/60 text-base leading-relaxed max-w-xl mx-auto font-light">
            No dia 21 de junho, a My Yoga House reuniu mulheres incríveis para uma manhã de yoga, vinho e conversa verdadeira.
            O que era um encontro virou memória.
          </p>
        </div>

        {/* Fotos do evento */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Números do encontro */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center border-t border-blush/15 pt-16">
          <div>
            <p className="font-serif text-5xl md:text-6xl text-blush font-semibold mb-2">1º</p>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40">encontro</p>
          </div>
          <div>
            <p className="font-serif text-5xl md:text-6xl text-blush font-semibold mb-2">21</p>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40">de junho</p>
          </div>
          <div>
            <p className="font-serif text-5xl md:text-6xl text-blush font-semibold mb-2">∞</p>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40">memórias</p>
          </div>
        </div>

      </div>
    </section>
  )
}
