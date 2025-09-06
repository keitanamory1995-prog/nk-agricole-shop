import './globals.css'

export const metadata = {
  title: 'NK Agricole — Boutique en ligne',
  description: 'Commander en ligne — NK Agricole',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
