const steps = [
  {
    number: '01',
    title: 'Chegada e acolhimento',
    desc: 'Um ambiente preparado com cuidado para que você se sinta em casa desde o primeiro momento — mesmo chegando sozinha.',
  },
  {
    number: '02',
    title: 'Experiência principal',
    desc: 'A vivência central do encontro: yoga, aquarela, piquenique, pintura, degustação ou outra experiência cuidadosamente escolhida.',
  },
  {
    number: '03',
    title: 'Roda de conversa temática',
    desc: 'Um círculo de partilha guiado por um tema que conecta a experiência ao universo das viagens, da vida e da liberdade.',
  },
  {
    number: '04',
    title: 'Pergunta de fechamento',
    desc: 'Uma pergunta que convida à reflexão individual — para cada uma levar algo verdadeiro consigo.',
  },
  {
    number: '05',
    title: 'Memória simbólica',
    desc: 'Um objeto ou lembrança pensado para carregar o encontro na bagagem da vida.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5 text-center">
          A jornada
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight text-center mb-4">
          Como funciona<br />
          <em className="text-terracota not-italic italic">cada encontro</em>
        </h2>
        <div className="flex justify-center mb-20">
          <div className="w-10 h-px bg-terracota" />
        </div>

        {/* Steps — lista vertical com linha lateral */}
        <div className="max-w-2xl mx-auto relative">

          {/* Linha vertical decorativa */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-terracota/15 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex gap-6 md:gap-10 items-start group"
              >
                {/* Número / círculo */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-linen border border-terracota/20 flex items-center justify-center group-hover:bg-terracota/10 transition-colors duration-300">
                    <span className="font-serif text-lg text-terracota">{step.number}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="pt-4 pb-8 flex-1">
                  <h3 className="font-serif text-xl text-coffee mb-2 group-hover:text-terracota transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-mocha leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
