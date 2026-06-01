export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{
        // Fundo escuro profundo — espresso quase preto com acento vinho, estética AstroJourney
        background: 'linear-gradient(155deg, #1C1210 0%, #2E1A14 45%, #3D1C2E 100%)',
      }}
    >
      {/* Luz atmosférica de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 10% 90%, rgba(193,149,88,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 45% 35% at 90% 10%, rgba(107,51,85,0.12) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Ornamento */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="w-16 h-px bg-terracota/40" />
          <svg className="w-4 h-4 text-terracota/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="w-16 h-px bg-terracota/40" />
        </div>

        {/* Label */}
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-terracota/80 mb-10">
          Manifesto
        </p>

        {/* Texto do manifesto — parágrafos separados para respirar */}
        <div className="space-y-6 font-serif text-lg md:text-xl text-cream/85 italic leading-relaxed">

          <p>
            Para nós, viajar nunca foi apenas sair de um lugar e chegar a outro.
          </p>
          <p>
            Viajar é sentir o mundo se abrindo.<br />
            É conversar com desconhecidos, provar algo novo,<br />
            se perder um pouco, se encontrar de outro jeito.
          </p>

          <div className="w-8 h-px bg-terracota/40 mx-auto my-8" />

          <p>
            Mas a verdade é que essa sensação não precisa existir<br className="hidden md:block" />
            só quando estamos longe de casa.
          </p>
          <p>
            Ela pode aparecer em uma conversa, em um café, em um filme,<br className="hidden md:block" />
            em uma trilha, em uma taça de vinho,<br className="hidden md:block" />
            em uma página de diário ou em uma nova amizade.
          </p>

          <div className="w-8 h-px bg-terracota/40 mx-auto my-8" />

          <p>
            Este clube nasceu para mulheres que amam viajar<br className="hidden md:block" />
            — mas, acima de tudo, amam a sensação de estar vivas.
          </p>
          <p className="text-cream/70">
            Mulheres que querem conhecer lugares, pessoas,<br className="hidden md:block" />
            histórias e versões de si mesmas.
          </p>
          <p className="text-cream/70">
            Aqui, cada encontro é uma pequena viagem simbólica.<br />
            Um convite para sair do automático, viver uma experiência nova,<br className="hidden md:block" />
            compartilhar histórias e lembrar que o mundo<br className="hidden md:block" />
            continua cheio de possibilidades.
          </p>

          <div className="w-8 h-px bg-terracota/40 mx-auto my-8" />

          <p className="text-xl md:text-2xl text-cream">
            Porque viajar não é apenas deslocamento geográfico.
          </p>
          <p className="text-xl md:text-2xl text-terracota font-serif">
            É uma forma de existir.<br />
            É uma forma de viver.
          </p>
        </div>

        {/* Assinatura */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-terracota/30" />
          <p className="font-serif text-base text-cream/50 italic">Entre Destinos</p>
          <div className="w-16 h-px bg-terracota/30" />
        </div>
      </div>
    </section>
  )
}
