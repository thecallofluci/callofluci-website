// new root layout for /app created from _app.tsx and _document.tsx in Pages Router
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { Fonts, PageLayout } from '@/components'
import theme from '@/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Fonts />
        <body>
          <PageLayout>{children}</PageLayout>
        </body>
      </ChakraProvider>
    </html>
  )
}
