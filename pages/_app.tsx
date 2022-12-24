import type { AppProps } from 'next/app'
import { Header, Layout } from 'components'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styled'
import store from 'store'
import { Provider, useSelector } from 'react-redux'
import wrapper from 'store'

function App({ Component, pageProps }: AppProps) {
  const isDark = useSelector(({ theme }: { theme: any }) => theme.value)
  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
