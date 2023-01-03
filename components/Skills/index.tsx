import { ContentTitle } from 'components/ContentTitle'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { ShowMotion } from 'motion'
import { useEffect, useRef, useState } from 'react'
import { Lightbulb } from '@mui/icons-material'

const Container = styled(motion.div)<{ listlength: number }>`
  height: 600vh;
  margin-bottom: 200px;
  .stackbox {
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
    padding: 10px;
    line-height: 2;
    color: ${(props) => props.theme.text.basic};
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        display: flex;
        gap: 5px;
        width: 100%;
        text-align: left;
      }
    }
  }
`

export const Skills = () => {
  const stackList = [
    {
      title: 'HTML',
      background: '#E34F26',
      point: [
        '적절한 Semantic Tag를 사용합니다.',
        '각 태그의 특성들을 고려하여 오류 없는 코드를 작성합니다.',
        '의미없는 Div태그의 남발을 하지 않습니다.',
      ],
    },
    {
      title: 'CSS',
      background: '#1572B6',
      point: [
        'BEM 방법론에 따른 class 이름을 짓습니다.',
        '요소의 레이아웃이 크게 바뀌지 않도록 노력합니다.',
        'flex의 활용으로 쉽고 깔끔하게 스타일링을 합니다.',
      ],
    },
    {
      title: 'Javascript',
      background: '#FF9E0F',
      point: [
        'ES6문법과 let,const를 사용하여 호이스팅 문제점을 방지합니다.',
        'class로 모듈화하여 프로그램 개발이 가능합니다.',
        '다양한 메소드를 활용하여 획일화된 코드를 짜지 않습니다.',
      ],
    },
    {
      title: 'Typescript',
      background: '#071D49',
      point: [
        '타입스크립트를 사용하는 의미를 이해합니다.',
        '리액트와 병행 사용하여 개발 할 수 있습니다.',
        '캡슐화, 추상화를 이해하고 코드를 재사용 할 수 있도록 합니다.',
      ],
    },
    {
      title: 'React',
      background: '#61DAFB',
      point: [
        'SPA에 대해 이해하고, 라이프사이클을 고려하여 개발하려 합니다.',
        'UI의 컴포넌트화, 코드 스플리팅에 대한 깊은 고민을 하며 개발합니다.',
        '컴포넌트의 성능개선에 대해 고민 하며 리팩토링을 합니다.',
      ],
    },
    {
      title: 'Next.js',
      background: '#000000',
      point: [
        'SSR, CSR에 대해 이해하고 Next.js의 필요성을 알고 있습니다.',
        '초기 렌더링 시간 및 노출화면에 대한 고민을 하게되었고, 어떻게 최적화를 하면 좋은지에 대해 생각합니다.',
      ],
    },
    {
      title: 'Recoil',
      background: '#FF4655',
      point: [
        '전역 상태관리를 하여 여러 컴포넌트에서 동일한 데이터를 사용 할 수 있습니다.',
        'Props Drilling 문제를 해결합니다.',
      ],
    },
    {
      title: 'Styled-components',
      background: '#DB7093',
      point: [
        '요소의 Style을 컴포넌트화 하면서, 코드의 재사용성을 향상 시킵니다.',
        '공통 Theme 생성으로 쉽게 레이아웃 스타일을 만들고, 다크모드와 라이트모드 구현이 가능합니다.',
      ],
    },
    {
      title: 'Framer-motion',
      background: '#EF2D5E',
      point: [
        '다양한 모션이 있어도 직접적으로 DOM을 건들지 않기 때문에, 컴포넌트 렌더링이 지속적으로 일어나지 않습니다.',
        '부드럽고 유려한 모션 구현이 가능합니다.',
      ],
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
        <ContentTitle title='Skills' />
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
                <ul>
                  {stack.point.map((point, idx) => (
                    <li key={idx}>
                      <Lightbulb /> {point}
                    </li>
                  ))}
                </ul>
              </div>
              <h4>{stack.title}</h4>
            </StackList>
          ))}
        </ul>
      </div>
    </Container>
  )
}
