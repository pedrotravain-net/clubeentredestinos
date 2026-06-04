import type { Metadata } from 'next'
import { Playfair_Display, Lato, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

// Fonte especial para o Manifesto — mais elegante e literária
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Entre Destinos — Clube de Experiências para Mulheres',
  description:
    'Encontros para mulheres que vivem a viagem como forma de existir. Entre uma viagem e outra, a vida também pode ser destino.',
  openGraph: {
    title: 'Entre Destinos',
    description: 'Encontros para mulheres que vivem a viagem como forma de existir.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
