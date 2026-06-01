// Dados dos encontros — editar aqui para atualizar os cards
const events = [
  {
    title: 'Yoga com Vinho',
    theme: 'A Pausa como Destino',
    location: null,
    desc: 'Uma experiência para respirar, brindar e lembrar que a vida também acontece entre uma viagem e outra.',
    tag: 'Em breve',
    // Gradiente que evoca vinho, pausa e suavidade
    cardBg: 'linear-gradient(135deg, rgba(107,51,85,0.12) 0%, rgba(155,112,128,0.18) 100%)',
    imageBg: 'linear-gradient(160deg, #E8D8C0 0%, #C1955840 50%, #6B335530 100%)',
  },
  {
    title: 'Café com Aquarela',
    theme: 'Desenhando a Viagem dos Sonhos',
    location: 'Cafeteria Kanto de Minas',
    desc: 'Uma experiência com café, aquarela e uma conversa sobre os primeiros passos para começar a planejar a viagem dos sonhos.',
    tag: 'Próximo',
    // Gradiente que evoca café, criatividade e sonho
    cardBg: 'linear-gradient(135deg, rgba(120,80,38,0.10) 0%, rgba(193,149,88,0.18) 100%)',
    imageBg: 'linear-gradient(160deg, #F1E8D8 0%, #C1955850 50%, #7A523840 100%)',
  },
  {
    title: 'Piquenique Literário',
    theme: 'Medo e Coragem',
    location: 'Parque das Nações Indígenas',
    desc: 'Um piquenique com discussão do livro da Tamara Klink sobre medo, coragem, autonomia e travessias.',
    tag: 'Em breve',
    // Gradiente que evoca natureza, literatura e abertura
    cardBg: 'linear-gradient(135deg, rgba(90,122,106,0.10) 0%, rgba(61,107,120,0.14) 100%)',
    imageBg: 'linear-gradient(160deg, #EAF0EC 0%, #5A7A6A50 50%, #3D6B7840 100%)',
  },
  {
    title: 'Pintura em Taça',
    theme: 'Entre a Mulher que Parte e a Mulher que Volta',
    location: null,
    desc: 'Uma experiência para pintar, brindar e conversar sobre como as viagens transformam nossas versões.',
    tag: 'Em breve',
    // Gradiente que evoca arte, transformação e celebração
    cardBg: 'linear-gradient(135deg, rgba(193,149,88,0.12) 0%, rgba(212,176,120,0.20) 100%)',
    imageBg: 'linear-gradient(160deg, #F8F2E8 0%, #D4B07860 50%, #C1955840 100%)',
  },
]

export default function Events() {
  return (
    <section id="encontros" className="py-28 md:py-40 bg-linen">
      <div className="max-w-6xl mx-auto px-6">

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5 text-center">
          Próximos encontros
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight text-center mb-4">
          Experiências que<br />
          <em className="text-terracota not-italic italic">esperam por você</em>
        </h2>
        <div className="flex justify-center mb-20">
          <div className="w-10 h-px bg-terracota" />
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              style={{ background: event.cardBg }}
            >
              {/*
                IMAGEM DO EVENTO:
                Substituir o bloco abaixo por:
                <div className="relative w-full h-52 overflow-hidden">
                  <Image src="/images/evento-nome.jpg" fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} />
                </div>
              */}
              <div
                className="w-full h-48 flex items-end p-5 relative overflow-hidden"
                style={{ background: event.imageBg }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg className="w-16 h-16 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Badge de status */}
                <span
                  className={`relative z-10 text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full ${
                    event.tag === 'Próximo'
                      ? 'bg-terracota text-cream'
                      : 'bg-cream/80 text-espresso'
                  }`}
                >
                  {event.tag}
                </span>
              </div>

              {/* Conteúdo do card */}
              <div className="p-7">
                <p className="font-sans text-xs tracking-widest uppercase text-terracota mb-2">
                  {event.theme}
                </p>
                <h3 className="font-serif text-2xl text-coffee mb-1">{event.title}</h3>
                {event.location && (
                  <p className="font-sans text-sm text-mocha mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                )}
                {!event.location && <div className="mb-4" />}
                <p className="font-sans text-sm text-mocha leading-relaxed mb-6 font-light">{event.desc}</p>

                {/*
                  LINK DE INSCRIÇÃO:
                  Substituir o href="#inscricao" pelo link do Sympla, Hotmart, Stripe, etc.
                  Ex: href="https://sympla.com.br/evento/yoga-com-vinho"
                */}
                <a
                  href="#inscricao"
                  className="inline-flex items-center gap-2 font-sans text-sm text-terracota hover:text-mocha transition-colors tracking-wide group/link"
                >
                  <span>Quero participar</span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
