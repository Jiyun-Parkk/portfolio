import type { AppProps } from 'next/app'
import { Layout } from 'components'
import { useAppSelector } from 'hooks'
import { dark, light } from 'styles/theme'
import GlobalStyle from 'styles/global.styled'
import { ThemeProvider } from 'styled-components'
import wrapper from 'store'
import { useEffect } from 'react'
import * as gtag from 'lib/gtag'
import { useRouter } from 'next/router'
import Script from 'next/script'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isDark = useAppSelector((state) => state.theme.value)
  const isModalOpen = useAppSelector((state) => state.modal.value)

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <>
      {/* GA 설정 시작 */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      {/* GA 설정 끝 */}
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
