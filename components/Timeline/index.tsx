import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  ul {
    padding: 0;
    li {
      white-space: nowrap;
      align-self: flex-start;
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
  return (
    <Container>
      <h2 className='about__timeline-title' data-aos='fade-up'>
        Timeline
      </h2>
      <Timeline position='alternate'>
        <TimelineItem data-aos='flip-down' data-aos-delay='100'>
          <TimelineOppositeContent>2015.01 - 2016.01</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>국민은행 임원비서 </TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos='flip-down' data-aos-delay='100'>
          <TimelineOppositeContent>우리은행 임원비서</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2016.04 - 2018.06</TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos='flip-down' data-aos-delay='100'>
          <TimelineOppositeContent>2017.09 - 2020.09</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> 경영학과 편입 졸업</TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos='flip-down' data-aos-delay='100'>
          <TimelineOppositeContent>
            UI/UX 퍼블리셔 전문가과정 수료
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>2020.10 - 2021.03</TimelineContent>
        </TimelineItem>
        <TimelineItem data-aos='flip-down' data-aos-offset='100'>
          <TimelineOppositeContent>2021.05 - 2022.06</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent> 아이엠폼 퍼블리셔 </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  )
}
