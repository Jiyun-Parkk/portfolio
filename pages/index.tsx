import { useAppSelector } from 'hooks'
import { SEO, Skills, TextAnimation, Timelines, Works } from 'components'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FlipHorizontalMotion, FlipVerticalMotion, StaggerMotion } from 'motion'

export const Intro = styled.section<{ isdark: boolean }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .about__intro-greeting {
    flex-basis: 50%;
    width: 100%;
    place-self: flex-start;
    line-height: 2;
    font-size: 1rem;
    padding: 80px 0;
    z-index: 2;

    p {
      color: ${(props) => props.theme.text.point};
      flex-basis: 50%;
      font-size: 2rem;
      font-weight: bolder;
      text-shadow: -2px 0px 0 darkgray;
      letter-spacing: 5px;
      line-height: 1.5;
      &:nth-child(2) {
        margin-bottom: 20px;
      }
    }

    .explain-me {
      span {
        color: ${(props) => props.theme.text.point};
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        text-shadow: -2px 0px 0 darkgray;
        display: inline-block;
      }
    }

    @media (max-width: 1200px) {
      padding: 0;
      flex: 1;
      place-self: center;
    }

    @media (max-width: 750px) {
      p {
        font-size: 2rem;
      }
    }
  }

  .about__intro-illust {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 500px;
      height: 500px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
    img {
      flex: 1;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  button {
    color: inherit;
    svg {
      font-size: 2rem;
    }
  }
`

export const InfoBox = styled.section<{ isdark: boolean }>`
  margin: 100px 20px 0;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid
    ${(props) =>
      props.isdark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
  gap: 200px;
`

const Home = () => {
  const isDark = useAppSelector((state) => state.theme.value)
  const greetings = [
    '배우는 것을 좋아하고',
    '좋은 코드를 위한 리팩토링을 즐겨합니다',
    '코드개선 ・ 의사소통 ・ 협업을 잘하는',
    '프론트 개발자 박지윤입니다',
  ]

  return (
    <>
      <SEO />
      <Intro isdark={isDark}>
        <motion.div
          initial='start'
          whileInView='end'
          className='about__intro-greeting'
        >
          <motion.p variants={FlipVerticalMotion}>WELCOME TO</motion.p>
          <motion.p variants={FlipVerticalMotion} transition={{ delay: 0.5 }}>
            Ji Yun PORTFOLIO
          </motion.p>

          <motion.div
            variants={StaggerMotion}
            initial='start'
            whileInView='end'
          >
            {greetings.map((greet, idx) => (
              <TextAnimation
                key={idx}
                variants={FlipVerticalMotion}
                text={greet}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className='about__intro-illust'>
          <motion.img
            src='/static/woman.svg'
            width={300}
            height={300}
            alt='coding woman'
            initial='start'
            whileInView='end'
            variants={FlipHorizontalMotion}
            transition={{
              duration: 1,
            }}
          />
        </div>
      </Intro>
      <Skills />
      <Timelines />
      <Works />
    </>
  )
}
export default Home
