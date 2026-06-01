const items = [
  'Para mulheres que amam viajar ou sonham viajar mais.',
  'Para quem sente falta de conhecer mulheres com interesses parecidos.',
  'Para quem quer viver experiências novas na rotina.',
  'Para quem gosta de conversar sobre viagens, vida, coragem, liberdade e descobertas.',
  'Para quem quer chegar sozinha, mas sair com novas histórias.',
]

export default function ForWho() {
  return (
    <section id="para-quem" className="py-28 md:py-40 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5 text-center">
            Para quem é
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight text-center mb-4">
            Este clube foi feito<br />
            <em className="text-terracota not-italic italic">para você, se…</em>
          </h2>
          <div className="flex justify-center mb-16">
            <div className="w-10 h-px bg-terracota" />
          </div>

          {/* Lista */}
          <div className="space-y-6 mb-16">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border border-terracota/40 flex items-center justify-center group-hover:bg-terracota/10 transition-colors duration-300">
                  <svg
                    className="w-3.5 h-3.5 text-terracota"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-lg text-espresso leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Destaque */}
          <div className="relative bg-cream rounded-3xl p-8 md:p-10 text-center overflow-hidden">
            {/* Detalhe decorativo de canto */}
            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle at top right, rgba(122,59,90,0.4), transparent 70%)',
              }}
            />
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-plum mb-4">
              Uma coisa importante
            </p>
            <p className="font-serif text-xl md:text-2xl text-plum italic leading-relaxed">
              "Sim, você pode chegar sozinha.<br className="hidden md:block" />
              Talvez esse seja justamente<br className="hidden md:block" />
              o melhor começo."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
