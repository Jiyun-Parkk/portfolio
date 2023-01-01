import Footer from 'components/Footer'
import { Header } from 'components/Header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactElement
}

const Container = styled(m.main)`
  padding: 80px 0 150px 0;
  section {
    padding: 50px 30px;
  }

  @media (max-width: 750px) {
    padding: 0;
  }
`

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </LazyMotion>
  )
}
