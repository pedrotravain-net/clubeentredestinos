import Image from 'next/image'

type Event = {
  title: string
  theme: string
  date: string
  weekday: string
  time: string
  location: string
  desc: string
  tag: string
  image: string
  objectPosition?: string
}

const events: Event[] = [
  {
    title: 'Café com Aquarela',
    theme: 'Desenhando a Viagem dos Sonhos',
    date: '18 de julho',
    weekday: 'Sábado',
    time: '14h às 17h',
    location: 'Kanto de Minas',
    desc: 'Uma experiência com café, aquarela e uma conversa sobre os primeiros passos para planejar a viagem dos sonhos.',
    tag: 'Próximo',
    image: '/images/evento-aquarela.png',
  },
  {
    title: 'Piquenique Literário',
    theme: 'Medo e Coragem',
    date: '23 ou 30 de agosto',
    weekday: 'Domingo',
    time: '8h30 às 10h30',
    location: 'Parque das Nações Indígenas',
    desc: 'Um piquenique com discussão do livro da Tamara Klink sobre medo, coragem, autonomia e travessias.',
    tag: 'Em breve',
    image: '/images/evento-livro.png',
  },
  {
    title: 'Pintura em Taça com Degustação de Bombons',
    theme: 'Um Brinde às Versões que a Viagem Revela',
    date: '19 de setembro',
    weekday: 'Sábado',
    time: '14h às 17h',
    location: 'Local a confirmar',
    desc: 'Uma experiência para pintar, brindar e conversar sobre como as viagens transformam nossas versões.',
    tag: 'Em breve',
    image: '/images/evento-pintura.png',
  },
  {
    title: 'Jantar às Cegas',
    theme: 'Quando os Sentidos Viram Destino',
    date: '16 de outubro',
    weekday: 'Sexta-feira',
    time: '19h às 22h',
    location: 'Local a confirmar',
    desc: 'Uma noite em que os olhos fecham e tudo o mais se abre: o paladar, a conversa, a presença. Uma viagem sem sair do lugar.',
    tag: 'Em breve',
    image: '/images/evento-jantar.png',
  },
  {
    title: 'Bordado e Cookies',
    theme: 'Memórias que vivemos, memórias que queremos criar.',
    date: '28 de novembro',
    weekday: 'Sábado',
    time: '14h às 17h',
    location: 'Fava Fava',
    desc: 'Uma experiência de bordado com cookies. Teremos a opção de bordar em foto ou bordar no tecido com moldura de acrílico.',
    tag: 'Em breve',
    image: '/images/evento-bordado.png',
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

        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 bg-cream"
            >
              {/* Imagem */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-700 ${event.objectPosition ?? 'object-center'}`}
                />
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

              {/* Conteúdo */}
              <div className="p-7">
                <p className="font-sans text-xs tracking-widest uppercase text-terracota mb-2">
                  {event.theme}
                </p>
                <h3 className="font-serif text-2xl text-coffee mb-3 group-hover:text-terracota transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Data, hora e local */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 text-terracota mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-sans text-sm text-espresso">{event.date} · {event.time}</p>
                      <p className="font-sans text-xs text-terracota font-medium mt-0.5">{event.weekday}</p>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-mocha flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 text-terracota" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                </div>

                <p className="font-sans text-sm text-mocha leading-relaxed mb-6 font-light">{event.desc}</p>

                {/* LINK: substituir pelo Sympla quando o evento for criado */}
                <a
                  href={`https://wa.me/5567981862300?text=${encodeURIComponent(`Olá! Quero participar do encontro "${event.title}" — ${event.date}. Pode me passar mais informações?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
