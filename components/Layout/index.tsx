import Footer from 'components/Footer'
import { Header } from 'components/Header'
import { ReactElement } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactElement
}

const Container = styled.main`
  padding-top: 110px;
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
