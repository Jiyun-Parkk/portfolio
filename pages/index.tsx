import { useAppSelector } from 'hooks'
import Image from 'next/image'
import { SEO, Stacks, Timelines, Works } from 'components'
import styled from 'styled-components'

export const Intro = styled.section<{ isdark: boolean }>`
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .about__intro-greeting {
    flex-basis: 50%;
    width: 100%;
    padding: 50px 0;
    place-self: flex-start;
    line-height: 2;
    font-size: 1rem;
    padding-bottom: 30px;
    z-index: 2;

    h1 {
      margin-bottom: 80px;

      span {
        color: ${(props) => props.theme.text.point};
        flex-basis: 50%;
        text-align: center;
        font-size: 2.5rem;
        font-weight: bolder;
        text-shadow: -2px 0px 0 darkgray;
        letter-spacing: 5px;
        line-height: 1;
      }
    }

    p {
      span {
        color: ${(props) => props.theme.text.point};
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        text-shadow: -2px 0px 0 darkgray;
      }
    }

    @media (max-width: 1200px) {
      flex: 1;
      place-self: center;
      h1 {
        line-height: 3.5;
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
      transform: rotateY(180deg);
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
        <div className='about__intro-greeting'>
          <h1>
            <span>
              WELCOME TO
              <br />
              Ji Yun&apos;s PORTFOLIO
            </span>
          </h1>
          <p>
            배우는 것을 좋아하고
            <br />
            좋은 코드를 위한 리팩토링을 즐겨합니다.
            <br />
            <span>코드개선 ・ 의사소통 ・ 협업</span>을
            <br /> 잘하는 <span>프론트엔드 개발자 박지윤</span>입니다.
          </p>
        </div>

        <div className='about__intro-illust'>
          <Image
            data-aos='fade-up'
            src='/static/woman.svg'
            width={300}
            height={300}
            alt='coding woman'
            className='woman'
            priority
          />
        </div>
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
