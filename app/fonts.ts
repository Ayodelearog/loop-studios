import { Alata, Josefin_Sans } from 'next/font/google'

export const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alata',
})

export const josefin = Josefin_Sans({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
})