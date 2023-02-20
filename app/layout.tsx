import './globals.scss'
import { Montserrat } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AnalyticsWrapper } from '@/components/Analytics'


const font = Montserrat({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head />
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
