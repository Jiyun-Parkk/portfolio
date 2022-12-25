import { useAppSelector } from 'hooks'
import styled from 'styled-components'
import {
  CopyrightOutlined,
  GitHub,
  LocalCafeTwoTone,
} from '@mui/icons-material'

const Container = styled.footer<{ isDark: boolean }>`
  width: 100%;
  padding: 30px;
  border-top: 1px solid
    ${(props) =>
      props.isDark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 30px;
  .footer__links {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 30px;

    .footer__blog-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      justify-items: center;
      span {
        font-size: 0.2rem;
      }
    }
  }

  .footer__copyright {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 10px;
    font-size: 0.8rem;
    color: ${(props) =>
      props.isDark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.8)'};
  }
`

const Footer = () => {
  const isDark = useAppSelector((state) => state.theme.value)
  return (
    <Container isDark={isDark}>
      <div className='footer__links'>
        <a href='https://github.com/jiyun-par' rel='noreferrer' target='_blank'>
          <GitHub />
        </a>
        <a
          className='footer__blog-link'
          href='https://june-dev.vercel.app/'
          rel='noreferrer'
          target='_blank'
        >
          <LocalCafeTwoTone />
          <span>BLOG</span>
        </a>
      </div>
      <div className='footer__copyright'>
        <CopyrightOutlined />
        <span>2022. Jiyun Park All rights reserved</span>
      </div>
    </Container>
  )
}

export default Footer
