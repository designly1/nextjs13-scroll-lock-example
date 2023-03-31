// @/pages/_app.js
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const font = Courier_Prime({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}
