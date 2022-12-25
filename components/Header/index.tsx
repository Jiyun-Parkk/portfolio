import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { theme } from 'store/modules'
import { useAppSelector } from 'hooks'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Container = styled.header<{ scrollY: number; isDark: boolean }>`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  transition: background 0.5s;
  &.active {
    background: ${(props) =>
      props.isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(220, 220, 220, 0.4)'};
  }
  nav {
    padding-left: 20px;
    flex: 1;
    ul {
      display: flex;
      gap: 30px;
      li {
        cursor: pointer;
        font-weight: bold;
        &.active {
          color: ${(props) => props.theme.text.point};
        }
      }
    }
  }
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
    aspect-ratio: 1;
  }
`

export const Header: NextPage = () => {
  const router = useRouter()
  const isDark = useAppSelector((state) => state.theme.value)
  const dispatch = useDispatch()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [scrollY])
  return (
    <>
      <Container
        isDark={isDark}
        scrollY={scrollY}
        className={scrollY === 0 ? '' : 'active'}
      >
        <Image
          src={isDark ? '/static/logo-white.png' : '/static/logo-black.png'}
          width={100}
          height={65}
          alt='logo'
          priority
        />
        <nav>
          <ul>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href='/'>About</Link>
            </li>
            <li className={router.pathname === '/contact' ? 'active' : ''}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Button type='button' onClick={() => dispatch(theme.isDark())}>
          {isDark ? (
            <LightMode style={{ color: 'red' }} />
          ) : (
            <DarkMode style={{ color: 'darkblue' }} />
          )}
        </Button>
      </Container>
    </>
  )
}
