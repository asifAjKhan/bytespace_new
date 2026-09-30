import type { Metadata } from 'next'
import { Poppins, Urbanist } from 'next/font/google'

import './globals.css'
const sans = Urbanist({ subsets: ['latin'], variable: '--font-sans' })
const display = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})
export const metadata: Metadata = {
  title: 'ByteSpace – Get Access to Hundreds Courses',
  description: 'Learn, create and grow with ByteSpace Courses.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  )
}
