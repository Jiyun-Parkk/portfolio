import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from 'hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { modal } from 'store/modules'
import WorkModal from 'components/WorkModal'

const Container = styled.section<{ isdark: boolean }>`
  /*padding: 100px 20px;*/
  h2 {
    padding: 50px 0;
    color: ${(props) => props.theme.text.point};
    flex-basis: 50%;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: -2px 0px 0 darkgray;
    text-align: center;
  }
  p {
    text-align: center;
    padding-bottom: 50px;
    line-height: 2;
  }
  .about__works-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
`

const WorkList = styled(motion.li)<{ thumb: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 400px;
  background: ${(props) => `url(${props.thumb}) no-repeat center / cover`};
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
    content: '';
    display: block;
  }
  .about__work-title {
    flex: 1;
    z-index: 10;
    h3 {
      font-size: 1.5rem;
      font-weight: bolder;
      text-align: center;
      color: #fff;
      text-shadow: -2px 0 0 ${(props) => props.theme.text.point};
    }
    p {
      padding: 0;
      font-size: 14px;
      color: #fff;
    }
  }
  @media (max-width: 1200px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`
const Overlay = styled(motion.div)`
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
`
const dimVariant = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      ease: 'linear',
      duration: 0.5,
    },
  },
}

export const Works = () => {
  const [workName, setWorkName] = useState('')
  const workList = [
    { title: 'Coin-Tracker', thumb: '/static/cointracker.png' },
    { title: 'Portfolio', thumb: '/static/portfolio.png' },
    { title: 'Oz-Training', thumb: '/static/oztraining.png' },
  ]
  const isDark = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  return (
    <Container isdark={isDark}>
      <h2>Project</h2>

      <motion.ul className='about__works-container'>
        {workList.map((work, idx) => (
          <WorkList
            key={idx}
            thumb={work.thumb}
            onClick={() => {
              setWorkName(work.title)
              dispatch(modal.isOpen(true))
            }}
            transition={{ ease: 'linear', duration: 0.2 }}
            layoutId={work.title}
          >
            <div className='about__work-title'>
              <h3>{work.title.replace('-', ' ')}</h3>
              <p>Click here</p>
            </div>
          </WorkList>
        ))}
      </motion.ul>
      <AnimatePresence>
        {workName ? (
          <Overlay
            className='dim'
            variants={dimVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={() => {
              setWorkName('')
              dispatch(dispatch(modal.isOpen(false)))
            }}
          >
            <WorkModal title={workName} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  )
}
