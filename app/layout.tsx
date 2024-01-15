import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Not Youtube',
  description: 'Nothing works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='p-0 m-0'>
      <body className={cn(inter.className,"m-0 p-0 bg-neutral-900 text-white")}>{children}</body>
    </html>
  )
}
