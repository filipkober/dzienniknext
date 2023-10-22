import './globals.css'

export const metadata = {
  title: 'Dziennik',
  description: 'Prosty dziennik',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
