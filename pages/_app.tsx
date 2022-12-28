import type { AppProps } from 'next/app'
import { Layout } from 'components'
import { useAppSelector } from 'hooks'
import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styled'
import { ThemeProvider } from 'styled-components'
import wrapper from 'store'

function App({ Component, pageProps }: AppProps) {
  const isDark = useAppSelector((state) => state.theme.value)
  const isModalOpen = useAppSelector((state) => state.modal.value)

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle isOpen={isModalOpen} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
