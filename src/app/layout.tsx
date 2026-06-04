import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-open-sans',
  display: 'swap',
})

// TODO: confirm final deployment domain for og:url and canonical
export const metadata: Metadata = {
  title: 'Minds & Hands in Research',
  description:
    "A study of how researchers across disciplines think and work alongside AI.",
  openGraph: {
    title: 'Minds & Hands in Research',
    description:
      "A study of how researchers across disciplines think and work alongside AI.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>{children}</body>
    </html>
  )
}
