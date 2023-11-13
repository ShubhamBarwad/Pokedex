import { Inter } from 'next/font/google'
import 'material-icons/iconfont/material-icons.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Details Page'
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
        <body className={inter.className}>
          {children}
        </body>
    </html>
  )
}