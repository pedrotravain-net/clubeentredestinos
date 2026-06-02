import Image from 'next/image'

// Dados dos encontros — editar aqui para atualizar os cards
const events = [
  {
    title: 'Yoga com Vinho',
    theme: 'A Pausa como Destino',
    location: null,
    desc: 'Uma experiência para respirar, brindar e lembrar que a vida também acontece entre uma viagem e outra.',
    tag: 'Em breve',
    image: '/images/evento-yoga.png',
    cardBg: 'rgba(248,242,239,1)',
  },
  {
    title: 'Café com Aquarela',
    theme: 'Desenhando a Viagem dos Sonhos',
    location: 'Cafeteria Kanto de Minas',
    desc: 'Uma experiência com café, aquarela e uma conversa sobre os primeiros passos para começar a planejar a viagem dos sonhos.',
    tag: 'Próximo',
    image: '/images/evento-aquarela.png',
    cardBg: 'rgba(248,242,239,1)',
  },
  {
    title: 'Piquenique Literário',
    theme: 'Medo e Coragem',
    location: 'Parque das Nações Indígenas',
    desc: 'Um piquenique com discussão do livro da Tamara Klink sobre medo, coragem, autonomia e travessias.',
    tag: 'Em breve',
    image: '/images/evento-livro.png',
    cardBg: 'rgba(248,242,239,1)',
  },
  {
    title: 'Pintura em Taça',
    theme: 'Entre a Mulher que Parte e a Mulher que Volta',
    location: null,
    desc: 'Uma experiência para pintar, brindar e conversar sobre como as viagens transformam nossas versões.',
    tag: 'Em breve',
    image: '/images/evento-pintura.png',
    cardBg: 'rgba(248,242,239,1)',
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
              className="rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-cream"
            >
              {/* Imagem do evento */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge de status sobre a imagem */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span
                    className={`text-xs font-sans tracking-widest uppercase px-3 py-1.5 rounded-full ${
                      event.tag === 'Próximo'
                        ? 'bg-terracota text-cream'
                        : 'bg-coffee/70 text-cream/90 backdrop-blur-sm'
                    }`}
                  >
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-7">
                <p className="font-sans text-xs tracking-widest uppercase text-terracota mb-2">
                  {event.theme}
                </p>
                <h3 className="font-serif text-2xl text-coffee mb-1 group-hover:text-terracota transition-colors duration-300">
                  {event.title}
                </h3>
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
                  Substituir href="#inscricao" pelo link do Sympla quando o evento for criado.
                  Ex: href="https://sympla.com.br/evento/yoga-com-vinho"
                */}
                <a
                  href="#inscricao"
                  className="inline-flex items-center gap-2 font-sans text-sm text-terracota hover:text-espresso transition-colors tracking-wide group/link font-medium"
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
