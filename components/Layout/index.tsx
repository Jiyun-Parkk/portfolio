import { Header } from 'components/Header'
import gsap from 'gsap'
import { ReactElement, useEffect } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  )
}
