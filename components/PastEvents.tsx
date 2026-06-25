'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/images/yoga-grupo.jpg', alt: 'Grupo de mulheres no Yoga com Vinho — Entre Destinos' },
  { src: '/images/yoga-pose.jpg',  alt: 'Yoga com equilíbrio e vinho — Entre Destinos' },
  { src: '/images/yoga-mesa.jpg',  alt: 'Mesa de petiscos do encontro — Entre Destinos' },
]

export default function PastEvents() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setActive(i => (i === 0 ? photos.length - 1 : i - 1))
  const next = () => setActive(i => (i === photos.length - 1 ? 0 : i + 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    touchStartX.current = null
  }

  return (
    <section id="ja-aconteceu" className="py-28 md:py-40 bg-espresso overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-blush/70 mb-5">
            Encontros anteriores
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
            Yoga com Vinho —<br />
            <em className="text-blush italic not-italic">e foi lindo demais</em>
          </h2>
          <div className="flex justify-center mt-6 mb-8">
            <div className="w-10 h-px bg-blush/40" />
          </div>
          <p className="font-sans text-cream/55 text-base leading-relaxed max-w-xl mx-auto font-light">
            No dia 21 de junho, a My Yoga House reuniu mulheres incríveis para uma manhã de yoga, vinho e conversa verdadeira. O que era um encontro virou memória.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative select-none">

          {/* Foto principal */}
          <div
            className="relative w-full overflow-hidden rounded-3xl"
            style={{ aspectRatio: '4/3', boxShadow: '0 30px 80px rgba(0,0,0,0.55)' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Setas */}
            <button
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-espresso/60 hover:bg-espresso/90 text-cream flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-espresso/60 hover:bg-espresso/90 text-cream flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 right-5 z-20 font-sans text-xs text-cream/70 tracking-widest">
              {active + 1} / {photos.length}
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex gap-3 mt-5 justify-center">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === active
                    ? 'ring-2 ring-blush opacity-100 scale-105'
                    : 'opacity-40 hover:opacity-70'
                }`}
                style={{ width: 64, height: 48 }}
              >
                <Image
                  src={photo.src}
                  alt={`Miniatura ${i + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Números */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center border-t border-blush/15 mt-16 pt-14">
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
