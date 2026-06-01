'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Posso ir sozinha?',
    a: 'Sim! Muitas participantes chegam sozinhas — e isso faz parte da proposta. O ambiente é pensado para o acolhimento e a conexão entre mulheres que ainda não se conhecem. Chegar sozinha costuma ser o começo de novas amizades.',
  },
  {
    q: 'Preciso viajar muito para participar?',
    a: 'Não. O Entre Destinos é para quem ama viajar, sonha em viajar mais ou simplesmente se identifica com o espírito de quem viaja. O que importa é a essência — a curiosidade, a abertura, o desejo de viver bem. Não o número de países visitados.',
  },
  {
    q: 'Os encontros são só para mulheres?',
    a: 'Sim. O espaço foi pensado especialmente para mulheres — para criar um ambiente de segurança, leveza e conexão genuína entre elas.',
  },
  {
    q: 'O que está incluso?',
    a: 'Cada encontro tem sua própria programação. Em geral, inclui a experiência principal, materiais necessários, bebidas e petiscos, roda de conversa e a memória simbólica. Tudo isso é informado detalhadamente no momento da inscrição.',
  },
  {
    q: 'E se eu não beber álcool?',
    a: 'Sem problema! Os encontros sempre têm opções não alcoólicas. O objetivo é o acolhimento e a experiência — não o consumo. Você se sentirá tão bem como qualquer outra participante.',
  },
  {
    q: 'Como faço para participar?',
    a: 'Preencha o formulário acima com seus dados e o encontro de seu interesse. Você receberá as informações sobre data, local, valor e como confirmar sua presença. É simples assim.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5 text-center">
            Dúvidas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight text-center mb-4">
            Perguntas<br />
            <em className="text-terracota not-italic italic">frequentes</em>
          </h2>
          <div className="flex justify-center mb-16">
            <div className="w-10 h-px bg-terracota" />
          </div>

          {/* Acordeão */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-linen rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-serif text-lg text-coffee group-hover:text-terracota transition-colors duration-200">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-terracota flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Resposta com animação */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-7 pb-6 font-sans text-base text-mocha leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA abaixo do FAQ */}
          <div className="mt-16 text-center">
            <p className="font-sans text-base text-mocha mb-6 font-light">
              Ainda tem alguma dúvida?
            </p>
            {/*
              LINK DO WHATSAPP:
              Substituir o número abaixo pelo número real da Vanessa.
              Formato: 55 + DDD + número (sem espaços ou traços)
            */}
            <a
              href="https://wa.me/5567981862300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-espresso/30 text-espresso font-sans text-sm tracking-wide px-7 py-3.5 rounded-full hover:border-terracota hover:text-terracota transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
