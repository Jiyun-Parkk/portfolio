import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { theme } from 'store/modules'
import styled from 'styled-components'
import { useAppSelector } from 'hooks'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.header`
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  nav {
    padding-left: 20px;
    flex: 1;
    ul {
      display: flex;
      gap: 30px;
      li {
        cursor: pointer;
        font-weight: bold;
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
  const isDark = useAppSelector((state) => state.theme.value)
  const dispatch = useDispatch()
  return (
    <>
      <Container>
        <Image
          src={isDark ? '/static/logo-white.png' : '/static/logo-black.png'}
          width={100}
          height={65}
          alt='logo'
          priority
        />
        <nav>
          <ul>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact</Link>
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
