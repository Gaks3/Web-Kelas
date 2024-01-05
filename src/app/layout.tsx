import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Informatics One SMK N 2 Yogyakarta',
  description: 'Generated by create next app',
  openGraph: {
    title: 'XI SIJA 1',
    description: 'XI SIJA 1',
    images: ['/ogimage.jpg'],
  },
  twitter: {
    title: 'XI SIJA 1',
    description: 'Kelas',
    images: ['/ogimage.jpg'],
  },
  keywords: ['SIJA', 'sija', 'informatics', 'sija 26', 'xi sija 1'],
  verification: {
    google: '_-X36VnEIWAWaq6cTM8oxBtvycZTDqRUnIvbaAuCdB4',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: 'XI SIJA 1'}],
  creator: 'XI SIJA 1',
  publisher: 'XI SIJA 1',
  applicationName: 'XI SIJA 1',
  generator: 'XI SIJA 1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn('relative', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
