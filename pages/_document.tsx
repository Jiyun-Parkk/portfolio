import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta
          name='keyword'
          content='프론트엔드 포트폴리오,frontend, portfolio, 박지윤 프론트엔드'
        />
        <meta
          name='description'
          content='프론트엔드 개발자 박지윤의 포트폴리오 입니다'
        />
        <meta name='author' content='박지윤' />
        <meta name='robots' content='index, nofollow' />
        <meta name='title' content='프론트엔드 박지윤의 포트폴리오' />
        <meta name='subject' content='프론트엔드 포트폴리오' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
