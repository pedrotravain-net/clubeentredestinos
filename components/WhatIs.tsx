const pillars = [
  {
    symbol: '◈',
    label: 'Experiência',
    desc: 'Cada encontro é uma vivência única, cuidadosamente criada para despertar os sentidos.',
  },
  {
    symbol: '◎',
    label: 'Reflexão',
    desc: 'Espaço para pensar, partilhar e mergulhar em si mesma com profundidade e leveza.',
  },
  {
    symbol: '◇',
    label: 'Pertencimento',
    desc: 'Uma comunidade de mulheres que se reconhecem e constroem laços reais.',
  },
  {
    symbol: '◉',
    label: 'Descoberta',
    desc: 'Novas perspectivas, novos caminhos, novas versões — a cada encontro.',
  },
  {
    symbol: '◌',
    label: 'Liberdade',
    desc: 'Para ser quem você é, para chegar sozinha, para partir diferente.',
  },
]

export default function WhatIs() {
  return (
    <section id="o-que-e" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Texto */}
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5">
              O clube
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-6">
              O que é o<br />
              <em className="text-terracota not-italic italic">Entre Destinos?</em>
            </h2>
            <div className="w-10 h-px bg-terracota mb-10" />
            <p className="font-sans text-lg text-espresso leading-relaxed mb-6">
              Um clube de experiências para mulheres que amam viajar e querem viver, no cotidiano, a mesma sensação de descoberta, liberdade e conexão que uma viagem proporciona.
            </p>
            <p className="font-sans text-base text-mocha leading-relaxed font-light">
              Cada encontro é uma pequena viagem simbólica — com tema, experiência sensorial, conversa profunda e uma memória para levar.
            </p>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`bg-linen rounded-2xl p-6 group hover:bg-terracota/8 transition-colors duration-300 ${
                  i === 4 ? 'col-span-2' : ''
                }`}
              >
                <span className="text-terracota text-2xl mb-4 block font-serif leading-none">
                  {p.symbol}
                </span>
                <h3 className="font-serif text-lg text-coffee mb-2 group-hover:text-terracota transition-colors">
                  {p.label}
                </h3>
                <p className="font-sans text-sm text-mocha leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
