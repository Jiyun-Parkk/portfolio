import { ContentTitle } from 'components/ContentTitle'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { ShowMotion } from 'motion'
import { useEffect, useRef, useState } from 'react'
import { Lightbulb } from '@mui/icons-material'

const Container = styled(motion.div)<{ listlength: number }>`
  height: 600vh;
  margin-bottom: 200px;
  ul {
    width: ${(props) => `calc(${props.listlength * 330}px - 80vw)`};
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 30px;
    flex-wrap: nowrap;

    @media (max-width: 1440px) {
      width: ${(props) => `calc(${props.listlength * 330}px - 70vw)`};
    }
    @media (max-width: 1200px) {
      width: ${(props) => `calc(${props.listlength * 330}px - 60vw)`};
    }
    @media (max-width: 750px) {
      width: ${(props) => `calc(${props.listlength * 330}px + 2vw)`};
    }
  }
`

const StackList = styled(motion.li)<{ background: string }>`
  place-self: flex-start;
  height: 300px;
  background: ${(props) => props.background};
  text-align: center;
  font-weight: bolder;
  font-size: 1.1rem;
  border-radius: 5px;
  color: #eeee;
  cursor: pointer;
  position: relative;

  h4 {
    position: absolute;
    font-size: 2rem;
    bottom: -10px;
    right: 30px;
    color: transparent;
    font-weight: 600;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${(props) => props.theme.text.basic};
  }
  div {
    margin: 30px 20px;
    width: 300px;
    height: 100%;
    background: ${(props) => props.theme.background.gray};
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    padding: 10px;
    line-height: 2;
    color: ${(props) => props.theme.text.basic};
    p {
      margin-bottom: 30px;
      text-align: justify;
    }
  }
`

export const Stacks = () => {
  const stackList = [
    {
      title: 'HTML',
      background: '#E34F26',
      point: 'Symantic Tag',
      thinking:
        '의미있는 태그를 사용하여 보기 쉬운 HTML을 작성하는 것을 중요하게 생각합니다.',
    },
    {
      title: 'CSS',
      background: '#1572B6',
      point: 'BEM, Flex',
      thinking:
        'BEM 방법론을 적용하여 이해하기 쉬운 클래스 명을 만듭니다. Flex로 요소의 정렬 및 레이아웃을 깔끔하게 구현 할 수 있습니다.',
    },
    {
      title: 'Javascript',
      background: '#FF9E0F',
      point: 'ES6',
      thinking:
        'ES6 이후의 문법을 사용하여, 호이스팅 문제점을 방지합니다. 다양한 메소드의 활용으로 획일화된 코드를 짜지 않습니다. Class로 모듈 프로그램 개발이 가능합니다.',
    },
    {
      title: 'Typescript',
      background: '#071D49',
      point: 'Type definition, 캡슐화, 추상화',
      thinking:
        '타입스크립트를 사용하는 의의에 대해 이해하고, React와 병행사용하며 오류발생률을 감소시킵니다.',
    },
    {
      title: 'React',
      background: '#61DAFB',
      point: 'SPA, Component 분리',
      thinking:
        '유용한 컴포넌트를 만들기 위해 지속적으로 고민하고 리팩토링을 해나갔습니다. 적절한 컴포넌트 분리로 코드의 재사용성 향상, 여러 훅을 활용한 컴포넌트 렌더링 최적화에 중점을 두고 있습니다.',
    },
    {
      title: 'Next.js',
      background: '#000000',
      point: 'SSR,SEO',
      thinking:
        'SSR와 CSR을 이해하고 SEO최적화에 대한 고민을 하게 되어 Next.js를 사용하게 되었습니다. prerendering으로 static한 source를 생성하여 사용자 편의성을 더 높이고, SEO 최적화가 될 수 있도록 노력했습니다.',
    },
    {
      title: 'Recoil',
      background: '#FF4655',
      point: 'Global State',
      thinking:
        '전역 상태관리를 함으로서, Props drilling 문제를 해결했습니다. 여러 컴포넌트에 적용할 데이터를 저장하고 사용합니다.',
    },
    {
      title: 'Styled-components',
      background: '#DB7093',
      point: 'Style 컴포넌트화',
      thinking:
        '요소의 스타일을 컴포넌트화 하여, 코드의 재사용성을 향상시키고 theme생성을 통해 공통 적용될 스타일을 쉽게 스타일링 할 수 있습니다.',
    },
    {
      title: 'Framer-motion',
      background: '#EF2D5E',
      point: '다양하고 부드러운 모션',
      thinking:
        '모션을 사용하여도, 컴포넌트 렌더링이 과부화 되지 않을 수 있습니다. 재미있고 다양한 모션 구현이 가능합니다.',
    },
  ]
  const ContainerRef = useRef<HTMLDivElement>(null)
  const ContentsRef = useRef<HTMLUListElement>(null)

  const { scrollYProgress } = useScroll({
    target: ContainerRef,
    offset: ['end end', 'start start'],
  })

  useEffect(() => {
    scrollYProgress.onChange((scroll) => {
      if (ContentsRef.current) {
        ContentsRef.current.style.transform = `translateX(-${Math.abs(
          scroll * 100 - 100,
        )}%)`
      }
    })
  }, [scrollYProgress])
  return (
    <Container ref={ContainerRef} listlength={stackList.length}>
      <div
        style={{
          position: 'sticky',
          top: '100px',
          overflow: 'hidden',
          paddingBottom: '30px',
        }}
      >
        <ContentTitle title='Stack' />
        <ul ref={ContentsRef} className='stackbox'>
          {stackList.map((stack, idx) => (
            <StackList
              variants={ShowMotion}
              initial='start'
              whileInView='end'
              key={idx}
              background={stack.background}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <div>
                <p>
                  <Lightbulb />
                  {stack.point}
                </p>

                <p>{stack.thinking}</p>
              </div>
              <h4>{stack.title}</h4>
            </StackList>
          ))}
        </ul>
      </div>
    </Container>
  )
}
