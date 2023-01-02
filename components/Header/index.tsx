import {
  DarkMode,
  HighlightOffOutlined,
  LightMode,
  Menu,
} from '@mui/icons-material'
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
    button {
      display: none;
    }
  }
  button {
    padding: 20px;
    border-radius: 50%;
    padding: 0;
    aspect-ratio: 1;
    color: ${(props) => props.theme.text.basic};
    svg {
      flex: 1;
    }

    &.mobile-menubar {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    nav {
      position: absolute;
      z-index: 25;
      top: 0;
      right: -100%;
      width: 40%;
      background-color: ${(props) => props.theme.background.mobileNav};
      height: 100vh;
      transition: all 0.5s;
      ul {
        padding: 100px 0;
        flex-direction: column;
        li {
          .circle {
            display: none;
          }
        }
      }
      button {
        display: flex;
        position: absolute;
        top: 20px;
        right: 10px;
        color: ${(props) => props.theme.text.basic};
        svg {
          width: 30px;
          height: 30px;
        }
      }
      &.active {
        right: 0;
      }
    }
    button {
      &.mobile-menubar {
        display: flex;
      }
    }
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
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollY.onChange((scroll) => {
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
        <Link
          href='/'
          shallow={true}
          onClick={() => {
            if (navRef.current) {
              navRef.current.classList.remove('active')
            }
          }}
        >
          <Image
            src={isDark ? '/static/logo-white.png' : '/static/logo-black.png'}
            width={100}
            height={65}
            alt='logo'
            priority
          />
        </Link>
        <nav ref={navRef}>
          <ul>
            {NavList.map((nav, idx) => (
              <li
                key={idx}
                className={router.pathname === nav.route ? 'active' : ''}
                onClick={() => {
                  if (navRef.current) {
                    navRef.current.classList.remove('active')
                  }
                }}
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
          <Button
            onClick={() => {
              if (navRef.current) {
                navRef.current.classList.remove('active')
              }
            }}
          >
            <HighlightOffOutlined />
          </Button>
        </nav>

        <div style={{ display: 'flex' }}>
          <Button type='button' onClick={() => dispatch(theme.isDark())}>
            {isDark ? (
              <LightMode style={{ color: 'yellow' }} />
            ) : (
              <DarkMode style={{ color: 'darkblue' }} />
            )}
          </Button>
          <Button
            type='button'
            className='mobile-menubar'
            onClick={() => {
              if (navRef.current) {
                navRef.current.classList.add('active')
              }
            }}
          >
            <Menu />
          </Button>
        </div>
      </Container>
    </>
  )
}
