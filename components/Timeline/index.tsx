import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
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
    width: 100%;
    ul {
      padding: 0;
      height: 800px;
      li {
        white-space: nowrap;
        height: 100%;
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
        white-space: normal;
      }
    }
  }
`

export const Timelines = () => {
  const timeList = [
    {
      date: '2015.01 - 2016.01',
      history: '국민은행 임원비서',
    },
    {
      date: '2016.04 - 2018.05',
      history: '우리은행 임원비서',
    },
    {
      date: '2017.09 - 2020.09',
      history: '경영학과 편입 졸업',
    },
    {
      date: '2020.10 - 2021.03',
      history: 'UI/UX 웹퍼블리셔 과정 수료',
    },
    {
      date: '2021.05 - 2022.06',
      history: '(주)아이엠폼 퍼블리셔 근무',
    },
  ]
  return (
    <Container>
      <ContentTitle title='Timeline' />
      <motion.div
        variants={ShowupMotion}
        initial='start'
        whileInView='end'
        transition={{ delay: 0.3 }}
        className='timeline-box'
      >
        <Timeline position='alternate'>
          {timeList.map((list, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot />
                {idx !== timeList.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <p>{list.date}</p>
                <p>{list.history}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Container>
  )
}
