export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{
        // Ameixa aquecida — feminino, acolhedor, combina com o dourado e creme da identidade
        background: 'linear-gradient(150deg, #5C2A3E 0%, #7A3A52 50%, #5C2E46 100%)',
      }}
    >
      {/* Luz atmosférica suave */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 5% 95%, rgba(156,101,32,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 95% 5%,  rgba(156,101,32,0.10) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Ornamento */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="w-16 h-px bg-blush/40" />
          <svg className="w-4 h-4 text-blush/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="w-16 h-px bg-blush/40" />
        </div>

        <p className="font-sans text-xs tracking-[0.35em] uppercase text-blush/70 mb-10">
          Manifesto
        </p>

        {/* Texto — Cormorant Garamond: mais literária e elegante */}
        <div
          className="space-y-7 text-cream/85 leading-relaxed"
          style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)' }}
        >
          <p>
            Para nós, viajar nunca foi apenas sair de um lugar e chegar a outro.
          </p>
          <p>
            Viajar é sentir o mundo se abrindo.<br />
            É conversar com desconhecidos, provar algo novo,<br />
            se perder um pouco, se encontrar de outro jeito.
          </p>

          <div className="w-10 h-px bg-blush/30 mx-auto my-8" />

          <p>
            Mas a verdade é que essa sensação não precisa existir<br className="hidden md:block" />
            só quando estamos longe de casa.
          </p>
          <p>
            Ela pode aparecer em uma conversa, em um café, em um filme,<br className="hidden md:block" />
            em uma trilha, em uma taça de vinho,<br className="hidden md:block" />
            em uma página de diário ou em uma nova amizade.
          </p>

          <div className="w-10 h-px bg-blush/30 mx-auto my-8" />

          <p>
            Este clube nasceu para mulheres que amam viajar<br className="hidden md:block" />
            — mas, acima de tudo, amam a sensação de estar vivas.
          </p>
          <p className="text-cream/65">
            Mulheres que querem conhecer lugares, pessoas,<br className="hidden md:block" />
            histórias e versões de si mesmas.
          </p>
          <p className="text-cream/65">
            Aqui, cada encontro é uma pequena viagem simbólica.<br />
            Um convite para sair do automático, viver algo novo,<br className="hidden md:block" />
            compartilhar histórias e lembrar que o mundo<br className="hidden md:block" />
            continua cheio de possibilidades.
          </p>

          <div className="w-10 h-px bg-blush/30 mx-auto my-8" />

          <p
            className="text-cream"
            style={{ fontSize: 'clamp(1.35rem, 3vw, 1.8rem)' }}
          >
            Porque viajar não é apenas deslocamento geográfico.
          </p>
          <p
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              color: '#C08840',
              fontWeight: 500,
            }}
          >
            É uma forma de existir.<br />
            É uma forma de viver.
          </p>
        </div>

        {/* Assinatura */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-blush/25" />
          <p className="text-cream/40 italic" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
            Entre Destinos
          </p>
          <div className="w-16 h-px bg-blush/25" />
        </div>
      </div>
    </section>
  )
}
