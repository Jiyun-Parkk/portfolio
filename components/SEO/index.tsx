import Head from 'next/head'

export const SEO = () => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
        user-scalable='no'
      />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <title>프론트엔드 박지윤의 포트폴리오</title>
    </Head>
  )
}
