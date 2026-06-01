'use client'

import { useState, FormEvent } from 'react'

const eventOptions = [
  'Yoga com Vinho',
  'Café com Aquarela',
  'Piquenique Literário',
  'Pintura em Taça',
  'Quero saber de todos',
]

export default function SignupForm() {
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    instagram: '',
    encontro: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    /*
      INTEGRAÇÃO:
      Substitua o console.log abaixo pela sua integração preferida:

      Opção 1 — Google Forms (POST direto):
        const url = 'https://docs.google.com/forms/d/e/SEU_FORM_ID/formResponse'
        fetch(url, { method: 'POST', body: new FormData(e.target as HTMLFormElement) })

      Opção 2 — WhatsApp (redireciona):
        const msg = `Olá, me chamo ${form.nome}. Quero participar do ${form.encontro}.`
        window.open(`https://wa.me/55SEUNUMERO?text=${encodeURIComponent(msg)}`)

      Opção 3 — Formspree / Resend / EmailJS (serviço de e-mail):
        fetch('https://formspree.io/f/SEU_ID', { method: 'POST', body: JSON.stringify(form) })

      Opção 4 — Integrar ao Sympla / Hotmart:
        Redirecionar para a página de inscrição da plataforma.
    */
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="inscricao" className="py-28 md:py-40 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Texto lateral */}
          <div className="md:pt-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-terracota mb-5">
              Participar
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee leading-tight mb-6">
              Quero entrar<br />
              <em className="text-terracota not-italic italic">na lista</em>
            </h2>
            <div className="w-10 h-px bg-terracota mb-10" />
            <p className="font-sans text-lg text-espresso leading-relaxed mb-6">
              Preencha o formulário com seus dados e o encontro de seu interesse. Você receberá todas as informações sobre data, local, valor e como confirmar sua presença.
            </p>
            <p className="font-sans text-base text-mocha leading-relaxed font-light">
              Pode chegar com curiosidade — e sair com uma história nova.
            </p>

            {/* Ícone/detalhe decorativo */}
            <div className="mt-12 hidden md:block">
              <svg className="w-24 h-24 text-terracota/15" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 5 L61 35 L93 35 L68 57 L79 88 L50 68 L21 88 L32 57 L7 35 L39 35 Z"/>
              </svg>
            </div>
          </div>

          {/* Formulário */}
          {submitted ? (
            <div className="bg-cream rounded-3xl p-10 text-center">
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-serif text-2xl text-coffee mb-3">Recebido com carinho!</h3>
              <p className="font-sans text-base text-mocha leading-relaxed font-light">
                Em breve você receberá as informações do próximo encontro. Obrigada por fazer parte do Entre Destinos.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-cream rounded-3xl p-8 md:p-10 space-y-6"
            >
              {/* Nome */}
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-mocha mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Como quer ser chamada"
                  className="w-full bg-transparent border-b border-sand focus:border-terracota outline-none py-3 font-sans text-base text-espresso placeholder:text-mocha/40 transition-colors duration-300"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-mocha mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="(67) 9 9999-0000"
                  className="w-full bg-transparent border-b border-sand focus:border-terracota outline-none py-3 font-sans text-base text-espresso placeholder:text-mocha/40 transition-colors duration-300"
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-mocha mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-transparent border-b border-sand focus:border-terracota outline-none py-3 font-sans text-base text-espresso placeholder:text-mocha/40 transition-colors duration-300"
                />
              </div>

              {/* Instagram */}
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-mocha mb-2">
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="@seuperfil"
                  className="w-full bg-transparent border-b border-sand focus:border-terracota outline-none py-3 font-sans text-base text-espresso placeholder:text-mocha/40 transition-colors duration-300"
                />
              </div>

              {/* Encontro de interesse */}
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-mocha mb-2">
                  Encontro de interesse *
                </label>
                <div className="relative">
                  <select
                    name="encontro"
                    value={form.encontro}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-sand focus:border-terracota outline-none py-3 font-sans text-base text-espresso appearance-none cursor-pointer transition-colors duration-300"
                  >
                    <option value="" disabled>Selecione um encontro</option>
                    {eventOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {/* Seta customizada */}
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-mocha pointer-events-none"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-terracota text-cream font-sans text-xs tracking-[0.25em] uppercase py-4 rounded-full hover:bg-mocha transition-all duration-300 hover:shadow-md"
                >
                  Quero entrar na lista
                </button>
                <p className="text-center font-sans text-xs text-mocha/60 mt-4 font-light">
                  Sem spam. Apenas os encontros que importam.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
