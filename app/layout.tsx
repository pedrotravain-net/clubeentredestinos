import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

// Tipografia principal — serif elegante para títulos
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

// Tipografia para corpo — limpa e legível
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Entre Destinos — Clube de Experiências para Mulheres',
  description:
    'Encontros para mulheres que vivem a viagem como forma de existir. Entre uma viagem e outra, a vida também pode ser destino.',
  openGraph: {
    title: 'Entre Destinos',
    description: 'Encontros para mulheres que vivem a viagem como forma de existir.',
    type: 'website',
    // og:image — SUBSTITUIR pela imagem de compartilhamento do clube
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
