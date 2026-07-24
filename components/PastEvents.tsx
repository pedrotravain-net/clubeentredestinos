'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const pastEvents = [
  {
    title: 'Yoga com Vinho',
    date: '21 de junho de 2025',
    location: 'My Yoga House',
    photos: [
      { src: '/images/yoga-grupo.jpg',  alt: 'Grupo de mulheres no Yoga com Vinho' },
      { src: '/images/yoga-pose.jpg',   alt: 'Yoga com equilíbrio e vinho' },
      { src: '/images/yoga-mesa.jpg',   alt: 'Mesa de petiscos do encontro' },
    ],
  },
  {
    title: 'Café com Aquarela',
    date: '18 de julho de 2025',
    location: 'Kanto de Minas',
    photos: [
      { src: '/images/evento-aquarela-cafe.jpg', alt: 'Grupo do Café com Aquarela' },
    ],
  },
]

function EventGallery({ event }: { event: typeof pastEvents[0] }) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setActive(i => (i === 0 ? event.photos.length - 1 : i - 1))
  const next = () => setActive(i => (i === event.photos.length - 1 ? 0 : i + 1))

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    touchStartX.current = null
  }

  return (
    <div className="rounded-3xl overflow-hidden bg-espresso/60 group" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
      {/* Foto */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '4/3' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {event.photos.map((photo, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          >
            <Image src={photo.src} alt={photo.alt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 600px" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Setas — só aparecem se tiver mais de 1 foto */}
        {event.photos.length > 1 && (
          <>
            <button onClick={prev} aria-label="Anterior" className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-espresso/60 hover:bg-espresso text-cream flex items-center justify-center backdrop-blur-sm transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} aria-label="Próxima" className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-espresso/60 hover:bg-espresso text-cream flex items-center justify-center backdrop-blur-sm transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute bottom-3 right-4 z-20 font-sans text-xs text-cream/60 tracking-widest">{active + 1} / {event.photos.length}</div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-blush transition-colors duration-300">{event.title}</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <p className="font-sans text-xs text-cream/50 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-blush/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {event.date}
          </p>
          <p className="font-sans text-xs text-cream/50 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-blush/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {event.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PastEvents() {
  return (
    <section id="ja-aconteceu" className="py-28 md:py-40 bg-espresso overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-blush/70 mb-5">
            Encontros anteriores
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-4">
            Momentos que<br />
            <em className="text-blush italic not-italic">já viraram memória</em>
          </h2>
          <div className="flex justify-center mt-6 mb-8">
            <div className="w-10 h-px bg-blush/40" />
          </div>
          <p className="font-sans text-cream/50 text-base leading-relaxed max-w-xl mx-auto font-light">
            Cada encontro é um capítulo. Aqui estão os que já aconteceram.
          </p>
        </div>

        {/* Grid de eventos passados */}
        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event, i) => (
            <EventGallery key={i} event={event} />
          ))}
        </div>

        {/* Números */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center border-t border-blush/15 mt-16 pt-14">
          <div>
            <p className="font-serif text-5xl md:text-6xl text-blush font-semibold mb-2">2</p>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40">encontros</p>
          </div>
          <div>
            <p className="font-serif text-5xl md:text-6xl text-blush font-semibold mb-2">2025</p>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40">temporada</p>
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
