import type { AppProps } from 'next/app'
import { Layout } from 'components'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styled'
import wrapper from 'store'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAppSelector } from 'hooks'

function App({ Component, pageProps }: AppProps) {
  const isDark = useAppSelector((state) => state.theme.value)
  const isModalOpen = useAppSelector((state) => state.modal.value)

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: 'linear',
    })
    AOS.refresh()
  }, [])
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
