import Image from 'next/image'

export default function AboutVanessa() {
  return (
    <section id="vanessa" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Foto da Vanessa — Islândia */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/vanessa-egito.jpg"
              alt="Vanessa no Egito, fundadora do Entre Destinos"
              fill
              className="object-cover object-top"
            />
            {/* Overlay sutil no rodapé para possível legenda */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-coffee/40 to-transparent" />
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

            {/* Números impactantes */}
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="font-serif text-5xl text-terracota font-semibold">~70</p>
                <p className="font-sans text-xs tracking-widest uppercase text-mocha mt-1">países visitados</p>
              </div>
              <div className="w-px h-12 bg-sand" />
              <div className="text-center">
                <p className="font-serif text-5xl text-terracota font-semibold">∞</p>
                <p className="font-sans text-xs tracking-widest uppercase text-mocha mt-1">histórias para contar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
