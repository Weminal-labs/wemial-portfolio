import '@/styles/globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Weminal',
  description: 'Where Ideas begin with a Hackathon.',
}

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-semibolditalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/pp-neue-montreal-fonts/ppneuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pp-neue-montreal',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        bebasNeue.variable,
        ppNeueMontreal.variable,
        'font-pp-neue-montreal',
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/logo/logo.png" sizes="any" />
      </head>
      <body className="main-container">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="dev-blog-theme"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
