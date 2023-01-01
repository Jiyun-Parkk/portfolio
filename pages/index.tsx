import { useAppSelector } from 'hooks'
import Image from 'next/image'
import { SEO, Stacks, TextAnimation, Timelines, Works } from 'components'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRef } from 'react'
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
    padding-bottom: 30px;
    z-index: 2;

    p {
      color: ${(props) => props.theme.text.point};
      flex-basis: 50%;
      font-size: 2.5rem;
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

    img {
      flex: 1;
      margin-bottom: 100px;
    }

    @media (max-width: 1200px) {
      display: none;
      img {
        display: none;
      }
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

  return (
    <>
      <SEO />

      {/* 첫번째 섹션 */}
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
            <TextAnimation
              variants={FlipVerticalMotion}
              text='배우는 것을 좋아하고'
            />
            <TextAnimation
              variants={FlipVerticalMotion}
              text='좋은 코드를 위한 리팩토링을 즐겨합니다'
            />
            <TextAnimation
              variants={FlipVerticalMotion}
              text='코드개선 ・ 의사소통 ・ 협업을'
            />
            <TextAnimation
              variants={FlipVerticalMotion}
              text='잘하는 개발자 박지윤입니다'
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='about__intro-illust'
          initial='start'
          whileInView='end'
          variants={FlipHorizontalMotion}
          transition={{
            duration: 1,
          }}
        >
          <Image
            src='/static/woman.svg'
            width={300}
            height={300}
            alt='coding woman'
            className='woman'
            priority
          />
        </motion.div>
      </Intro>

      {/* 두번째 섹션 */}
      <Timelines />
      {/*<InfoBox isdark={isDark} className='about__info'>*/}
      {/*<Stacks />*/}
      {/*</InfoBox>*/}

      {/* 세번째 섹션 */}
      <Works />
    </>
  )
}
export default Home
