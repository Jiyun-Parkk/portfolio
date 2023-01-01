import { ContentTitle } from 'components/ContentTitle'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ShowMotion } from 'motion'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  gap: 40px;

  ul {
    width: 100%;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  @media (max-width: 750px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const StackList = styled(motion.li)<{ background: string }>`
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: ${(props) => props.background};
  text-align: center;
  font-weight: bolder;
  font-size: 1.1rem;
  border-radius: 5px;
  color: #eeee;
  cursor: pointer;
`

export const Stacks = () => {
  const stackList = [
    { title: 'HTML', background: '#E34F26' },
    { title: 'CSS', background: '#1572B6' },
    { title: 'Javascript', background: '#FF9E0F' },
    { title: 'Typescript', background: '#071D49' },
    { title: 'React', background: '#61DAFB' },
    { title: 'Next.js', background: '#000000' },
    { title: 'Recoil', background: '#FF4655' },
    { title: 'Styled-components', background: '#DB7093' },
    { title: 'Framer-motion', background: '#EF2D5E' },
  ]
  return (
    <Container>
      <ContentTitle title='Stack' />
      <ul className='stackbox'>
        {stackList.map((stack, idx) => (
          <StackList
            variants={ShowMotion}
            initial='start'
            whileInView='end'
            key={idx}
            background={stack.background}
            transition={{
              duration: 0.5,
              delay: Math.random() * (0.6 - 0.2) + 0.2,
            }}
          >
            {stack.title}
          </StackList>
        ))}
      </ul>
    </Container>
  )
}
