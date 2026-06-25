'use client'
import { useState } from 'react'

const testimonials = [
  {
    quote: 'Foi incrível, assim como tudo o que você se propõe a fazer. Que venham mais encontros, conexões, descobertas e, acima de tudo, mulheres encontrando novas versões de si mesmas pelo caminho.',
    name: 'Denise P. Lima',
    handle: '@deniseplima',
    source: 'Instagram',
  },
  {
    quote: 'Que experiência maravilhosa! Como sempre, tudo pensado em cada detalhe. Obrigada por nos proporcionar um momento de autoconhecimento, descontração e diversão.',
    name: 'Nathalia Biava',
    handle: '@nath_biava',
    source: 'Instagram',
  },
  {
    quote: 'AMEI a experiência! E fazer algo pela primeira vez, mais uma vez! Parabéns pela iniciativa. Para quem quer participar dos próximos encontros — vai se arrepender se não for!',
    name: 'Grazielle Mosena',
    handle: '@graziellemosena.psi',
    source: 'Instagram',
  },
  {
    quote: 'Foi uma delícia! Já querendo o próximo!!',
    name: 'Inara Piva',
    handle: '@inarapiva',
    source: 'Instagram',
  },
  {
    quote: 'Um domingo diferente... momento para reconectar, viver experiências. Obrigada pela manhã inesquecível.',
    name: 'Daniela Bomfim',
    handle: '@danielarbomfim',
    source: 'Instagram',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="depoimentos" className="py-28 md:py-44 bg-linen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-terracota mb-5">
            Quem já viveu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight">
            O que dizem as mulheres<br />
            <em className="text-terracota italic not-italic">que estiveram lá</em>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-10 h-px bg-terracota" />
          </div>
        </div>

        {/* Depoimento em destaque */}
        <div className="max-w-3xl mx-auto mb-16">
          <div
            className="relative bg-cream rounded-3xl p-10 md:p-14 text-center"
            style={{ boxShadow: '0 20px 60px rgba(14,9,5,0.08)' }}
          >
            {/* Aspas decorativas */}
            <div
              className="absolute top-8 left-10 font-serif text-8xl leading-none text-terracota/15 select-none pointer-events-none"
              aria-hidden
            >
              "
            </div>

            <p
              className="font-serif italic text-coffee leading-relaxed mb-8 relative z-10"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
            >
              {testimonials[active].quote}
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-terracota/40" />
              <div className="text-center">
                <p className="font-sans text-sm font-semibold text-espresso tracking-wide">
                  {testimonials[active].name}
                </p>
                <p className="font-sans text-xs text-mocha mt-0.5">
                  {testimonials[active].handle}
                </p>
              </div>
              <div className="w-8 h-px bg-terracota/40" />
            </div>
          </div>
        </div>

        {/* Navegação por pontos */}
        <div className="flex items-center justify-center gap-3 mb-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Depoimento ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-8 h-2.5 bg-terracota'
                  : 'w-2.5 h-2.5 bg-sand hover:bg-terracota/40'
              }`}
            />
          ))}
        </div>

        {/* Cards secundários — frases curtas */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { quote: 'Que manhã incrível. Gratidão.', name: 'Cleide Monteiro', via: 'WhatsApp' },
            { quote: 'Ansiosa já pro próximo!', name: 'Nariema Felini', via: 'WhatsApp' },
            { quote: 'A proposta de fazer coisas diferentes é muito massa!', name: 'Caroline Cruz', via: 'WhatsApp' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-cream/70 rounded-2xl p-7 border border-sand/60 hover:border-terracota/30 transition-colors duration-300"
            >
              <p className="font-serif italic text-espresso text-lg leading-relaxed mb-5">
                "{item.quote}"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-mocha">
                {item.name} · {item.via}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
