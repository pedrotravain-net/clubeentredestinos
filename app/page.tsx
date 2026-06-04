import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import Events         from '@/components/Events'
import WhatIs         from '@/components/WhatIs'
import ForWho         from '@/components/ForWho'
import HowItWorks     from '@/components/HowItWorks'
import AboutVanessa   from '@/components/AboutVanessa'
import Manifesto      from '@/components/Manifesto'
import FAQ            from '@/components/FAQ'
import Footer         from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Events />        {/* Eventos logo após o Hero */}
      <WhatIs />
      <ForWho />
      <HowItWorks />
      <AboutVanessa />
      <Manifesto />
      <FAQ />
      <Footer />
      <WhatsAppButton /> {/* Botão flutuante sempre visível */}
    </main>
  )
}
