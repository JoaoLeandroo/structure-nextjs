import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '700', '900'] })

export const metadata: Metadata = {
  title: 'Estrutura Projeto NextJs',
  description: 'Description do meu projeto...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>

        <div className='flex flex-col min-h-screen'>
          <Header/>
          <main className='flex-grow'>{children}</main>
          <Footer/>
        </div>
        
        </body>
    </html>
  )
}
