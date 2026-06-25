import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import Events         from '@/components/Events'
import PastEvents     from '@/components/PastEvents'
import WhatIs         from '@/components/WhatIs'
import ForWho         from '@/components/ForWho'
import HowItWorks     from '@/components/HowItWorks'
import AboutVanessa   from '@/components/AboutVanessa'
import Testimonials   from '@/components/Testimonials'
import Manifesto      from '@/components/Manifesto'
import FAQ            from '@/components/FAQ'
import Footer         from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Events />
      <PastEvents />
      <WhatIs />
      <ForWho />
      <HowItWorks />
      <AboutVanessa />
      <Testimonials />
      <Manifesto />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
