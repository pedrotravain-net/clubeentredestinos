'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#o-que-e',      label: 'O Clube'     },
  { href: '#encontros',    label: 'Encontros'   },
  { href: '#vanessa',      label: 'A Vanessa'   },
  { href: '#faq',          label: 'Dúvidas'     },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logotipo — SUBSTITUIR pelo arquivo de logo se houver */}
        <a href="#" className="font-serif text-xl tracking-wide text-coffee hover:text-terracota transition-colors">
          Entre Destinos
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans tracking-wide text-espresso hover:text-terracota transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="bg-terracota text-cream text-sm font-sans tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-mocha transition-all duration-300"
          >
            Quero participar
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-px w-full bg-coffee transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-full bg-coffee transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-full bg-coffee transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Menu mobile dropdown */}
      <div
        className={`md:hidden bg-cream/98 backdrop-blur-md border-t border-sand transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-sans text-espresso hover:text-terracota transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="mt-2 bg-terracota text-cream text-sm font-sans tracking-widest uppercase px-6 py-3.5 rounded-full text-center hover:bg-mocha transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Quero participar
          </a>
        </div>
      </div>
    </nav>
  )
}
