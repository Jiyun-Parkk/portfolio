import Footer from 'components/Footer'
import { Header } from 'components/Header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactElement
}

const Container = styled(m.main)`
  padding-top: 80px;
  section {
    padding: 50px 20px;
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
