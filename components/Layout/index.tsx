import Footer from 'components/Footer'
import { Header } from 'components/Header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactElement
}

const Container = styled.main`
  section {
    padding: 100px 30px;
  }
`

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
