import './globals.scss'
import { Montserrat } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


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
      </body>
    </html>
  )
}
