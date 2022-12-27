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
import { useAppSelector } from 'hooks'
import { ContentTitle } from 'components/ContentTitle'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 50px 0;
  ul {
    padding: 0;
    width: 100%;
    height: 800px;
    li {
      white-space: nowrap;
      height: 100%;
      .MuiTimelineConnector-root {
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
  const isDark = useAppSelector((state) => state.theme.value)
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
    </Container>
  )
}
