import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning Project',
  description: 'Aprender Reactjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br bg" className='bg-slate-700 p-0 text-white'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
