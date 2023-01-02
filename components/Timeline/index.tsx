import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ContentTitle } from 'components/ContentTitle'
import { ShowupMotion } from 'motion'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  .timeline-box {
    margin-bottom: 200px;

    ul {
      display: flex;
      justify-items: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      li {
        width: 100%;
        display: flex;
        gap: 20px;
        span {
          &:nth-child(1) {
            width: 180px;
          }
          &:nth-child(2) {
            flex: 1;
            white-space: nowrap;
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 40px;
    ul {
      li {
        width: 100%;
        align-self: center;
      }
    }
  }
`

export const Timelines = () => {
  const timeline = [
    {
      title: 'Education',
      list: [
        {
          date: '2020.10 - 2021.03',
          history: 'UI/UX 웹퍼블리셔 과정 수료',
        },
        {
          date: '2022.07 - 2022.07',
          history: '원티드 프론트엔드 프리온보딩 챌린지',
        },
        {
          date: '2022.09 - 재학중',
          history: '방송통신대학교 컴퓨터공학과 편입',
        },
      ],
    },
    {
      title: 'Career',

      list: [
        {
          date: '2015.01 - 2016.01',
          history: '국민은행 임원비서 근무',
        },
        {
          date: '2016.04 - 2018.05',
          history: '우리은행 임원비서 근무',
        },
        {
          date: '2021.05 - 2022.06',
          history: '아이엠폼 퍼블리셔 근무',
        },
      ],
    },
  ]

  return (
    <Container>
      {timeline.map((time, idx) => (
        <div className='timeline-box' key={idx}>
          <ContentTitle title={time.title} />
          <motion.ul
            variants={ShowupMotion}
            initial='start'
            whileInView='end'
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {time.list.map((list, idx) => (
              <li key={idx}>
                <span>{list.date}</span>
                <span>{list.history}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      ))}
    </Container>
  )
}
