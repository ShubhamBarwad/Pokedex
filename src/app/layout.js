import { Inter } from 'next/font/google'
import './globals.css'
import 'material-icons/iconfont/material-icons.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
