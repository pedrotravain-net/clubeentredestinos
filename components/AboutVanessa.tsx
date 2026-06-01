export default function AboutVanessa() {
  return (
    <section id="vanessa" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/*
            FOTO DA VANESSA:
            Substituir este bloco por:
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image src="/images/vanessa.jpg" fill className="object-cover object-top" alt="Vanessa, fundadora do Entre Destinos" />
            </div>

            Tamanho recomendado: 900×1200px, orientação retrato, foto natural/editorial
          */}
          <div
            className="relative aspect-[3/4] rounded-3xl overflow-hidden flex items-end"
            style={{
              background: 'linear-gradient(160deg, #EDE0C8 0%, #C1955850 50%, #6B335530 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg className="w-32 h-32 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {/* Caption sobre a foto */}
            <div className="relative z-10 p-8">
              <p className="font-sans text-xs tracking-widest uppercase text-cream/80">
                Substituir pela foto da Vanessa
              </p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5">
              A fundadora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-6">
              Sobre a<br />
              <em className="text-terracota not-italic italic">Vanessa</em>
            </h2>
            <div className="w-10 h-px bg-terracota mb-10" />

            <p className="font-sans text-lg text-espresso leading-relaxed mb-6">
              Vanessa é dentista, tem 39 anos e já visitou aproximadamente 70 países, muitos deles sozinha.
            </p>
            <p className="font-sans text-base text-mocha leading-relaxed mb-6 font-light">
              Ao longo das viagens, percebeu que viajar nunca foi apenas sobre conhecer lugares, mas sobre se abrir para novas versões de si mesma.
            </p>
            <p className="font-sans text-base text-mocha leading-relaxed font-light">
              O Entre Destinos nasce do desejo de reunir mulheres que também amam viajar, viver experiências, criar memórias e conversar sobre a vida com mais liberdade, profundidade e leveza.
            </p>

            {/* Detalhe com número impactante */}
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="font-serif text-5xl text-terracota">~70</p>
                <p className="font-sans text-xs tracking-widest uppercase text-mocha mt-1">países visitados</p>
              </div>
              <div className="w-px h-12 bg-sand" />
              <div className="text-center">
                <p className="font-serif text-5xl text-terracota">∞</p>
                <p className="font-sans text-xs tracking-widest uppercase text-mocha mt-1">histórias para contar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
