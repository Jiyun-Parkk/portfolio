import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useAppSelector } from 'hooks'
import {
  HighlightOffOutlined,
  GitHub,
  LinkOutlined,
  RateReview,
} from '@mui/icons-material'
import workContents from './data'
import { Button } from '@mui/material'

interface ModalProps {
  title: string
}
const Container = styled(motion.div)<{ isdark: string }>`
  flex: 1;
  line-height: 2;
  position: relative;

  .box {
    position: relative;
    margin: 0 auto;
    width: 80%;
    border-radius: 20px;
    background-color: ${(props) => props.theme.background.lighter};
    padding: 20px 50px;
    height: 80vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      text-align: left;
    }

    .modal-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      place-self: flex-end;
      color: #fff;
      width: 50px;
      height: 50px;
      svg {
        width: 30px;
        height: 30px;
        fill: ${(props) => props.theme.text.point};
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 750px) {
    .box {
      width: 90%;
      padding: 20px;
    }
  }

  /* 컨텐츠 */
  h3,
  h4 {
    color: ${(props) => props.theme.text.point};
    flex-basis: 50%;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: -2px 0px 0 darkgray;
    &.work-title {
      font-size: 30px;
      font-weight: bolder;
      padding-bottom: 30px;
      border-bottom: 1px solid
        ${(props) =>
          props.isdark === 'true'
            ? 'rgba(255, 255, 255, 0.2)'
            : ' rgba(0, 0, 0, 0.3)'};
    }
  }
  .work-content-box {
    strong {
      font-weight: 600;
    }

    .source-box {
      display: flex;
      gap: 20px;

      a {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        svg {
          width: 30px;
          height: 30px;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
  }
`
const WorkModal = ({ title }: ModalProps) => {
  const isDark = useAppSelector((state) => state.theme.value)
  let content
  switch (title) {
    case 'Coin-Tracker':
      content = workContents['Coin-Tracker']
      break
    case 'Portfolio':
      content = workContents['Portfolio']
      break
    case 'Oz-Training':
      content = workContents['Oz-Training']
      break
  }

  return (
    <Container isdark={isDark.toString()}>
      <motion.div
        className='box'
        layoutId={title}
        transition={{ ease: 'linear', duration: 0.2 }}
      >
        <Button type='button' className='modal-close-btn'>
          <HighlightOffOutlined />
        </Button>
        <h3 className='work-title'>{title.replace('-', ' ')}</h3>
        <div className='work-content-box'>
          <h4>Description</h4>
          <p>{content?.detail}</p>
        </div>
        <div className='work-content-box'>
          <h4>Contribution</h4>
          <ul>
            <li>
              <strong>구성원:</strong> {content?.contribution.team}
            </li>
            <li>
              <strong>기여도:</strong> {content?.contribution.contribute}
            </li>
          </ul>
        </div>
        <div className='work-content-box'>
          <h4>Used Skills</h4>
          <p>{content?.stack}</p>
        </div>
        <div className='work-content-box'>
          <h4>Points</h4>
          <ul>
            {content?.point.map((point, idx) => (
              <li key={idx}>◉ {point}</li>
            ))}
          </ul>
        </div>

        <div className='work-content-box'>
          <h4>Source</h4>
          <div className='source-box'>
            <a
              href={content?.source.git}
              target='_blank'
              rel='referrer noreferrer'
            >
              <GitHub />
              <span>GIT</span>
            </a>
            {content?.source.link && (
              <a
                href={content?.source.link}
                target='_blank'
                rel='referrer noreferrer'
              >
                <LinkOutlined />
                <span>LINK</span>
              </a>
            )}
            {content?.source.notion && (
              <a
                href={content?.source.notion}
                target='_blank'
                rel='referrer noreferrer'
              >
                <RateReview />
                <span>Notion</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

export default WorkModal
