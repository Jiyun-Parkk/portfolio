import { DarkMode, LightMode } from '@mui/icons-material'
import { Button } from '@mui/material'
import { NextPage } from 'next'
import { theme } from 'store/modules'
import { useAppDispatch, useAppSelector } from 'hooks'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const Container = styled.header<{ isdark: boolean }>`
  position: fixed;
  z-index: 20;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  transition: background 0.5s;
  &.active {
    background: ${(props) =>
      props.isdark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(220, 220, 220, 0.4)'};
  }

  @media (max-width: 750px) {
    img {
      width: 80px;
      height: 50px;
    }
  }
  nav {
    padding-left: 20px;
    flex: 1;
    ul {
      display: flex;
      gap: 30px;
      li {
        position: relative;
        cursor: pointer;
        font-weight: bold;
        &.active {
          color: ${(props) => props.theme.text.point};
        }
        .circle {
          position: absolute;
          bottom: -15px;
          left: 50%;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${(props) => props.theme.text.point};
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
  const NavList = [
    { title: 'about', route: '/' },
    { title: 'contact', route: '/contact' },
  ]

  const router = useRouter()
  const { scrollY } = useScroll()
  const dispatch = useAppDispatch()
  const isDark = useAppSelector((state) => state.theme.value)
  const headerRef = useRef<HTMLBaseElement>(null)
  useEffect(() => {
    return scrollY.onChange((scroll) => {
      if (headerRef.current) {
        if (scroll > 0) {
          headerRef.current.classList.add('active')
        } else {
          headerRef.current.classList.remove('active')
        }
      }
    })
  }, [scrollY])
  return (
    <>
      <Container isdark={isDark} ref={headerRef}>
        <Link href='/' shallow={true}>
          <Image
            src={isDark ? '/static/logo-white.png' : '/static/logo-black.png'}
            width={100}
            height={65}
            alt='logo'
            priority
          />
        </Link>
        <nav>
          <ul>
            {NavList.map((nav, idx) => (
              <li
                key={idx}
                className={router.pathname === nav.route ? 'active' : ''}
              >
                <Link href={nav.route} shallow={true}>
                  {nav.title.toUpperCase()}
                </Link>
                {router.pathname === nav.route && (
                  <motion.span
                    className='circle'
                    layoutId='circle'
                  ></motion.span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Button type='button' onClick={() => dispatch(theme.isDark())}>
          {isDark ? (
            <LightMode style={{ color: 'yellow' }} />
          ) : (
            <DarkMode style={{ color: 'darkblue' }} />
          )}
        </Button>
      </Container>
    </>
  )
}
