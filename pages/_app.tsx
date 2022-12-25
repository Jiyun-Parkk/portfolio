import type { AppProps } from 'next/app'
import { Layout } from 'components'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styled'
import { useSelector } from 'react-redux'
import wrapper from 'store'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App({ Component, pageProps }: AppProps) {
  const isDark = useSelector(({ theme }: { theme: any }) => theme.value)
  useEffect(() => {
    gsap.registerPlugin(CSSPlugin)
    AOS.init({
      offset: 120,
      duration: 1000,
    })
  }, [])
  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
