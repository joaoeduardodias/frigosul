import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '../components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRM ',
  description: 'CRM Frigosul SulBeef',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex  overflow-hidden bg-white antialiased`}
      >
        <Sidebar />
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
