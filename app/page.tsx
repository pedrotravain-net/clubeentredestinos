import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import WhatIs        from '@/components/WhatIs'
import ForWho        from '@/components/ForWho'
import HowItWorks    from '@/components/HowItWorks'
import Events        from '@/components/Events'
import AboutVanessa  from '@/components/AboutVanessa'
import Manifesto     from '@/components/Manifesto'
import SignupForm    from '@/components/SignupForm'
import FAQ           from '@/components/FAQ'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <WhatIs />
      <ForWho />
      <HowItWorks />
      <Events />
      <AboutVanessa />
      <Manifesto />
      <SignupForm />
      <FAQ />
      <Footer />
    </main>
  )
}
