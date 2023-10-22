'use client'
// new root layout for /app created from _app.tsx and _document.tsx in Pages Router
import { ColorModeScript } from '@chakra-ui/react'
import { Fonts, PageLayout } from '@/components'
import theme from '@/theme'
import Providers from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <Fonts />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <PageLayout>{children}</PageLayout>
        </body>
      </Providers>
    </html>
  )
}

/* 
// root layout example from Next.js Documentation
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
*/