import { ContentTitle } from 'components/ContentTitle'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  gap: 40px;

  ul {
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 10px;
    flex-wrap: wrap;

    li {
      width: 200px;
      height: 200px;
      line-height: 200px;
      background: #263159;
      text-align: center;
      font-weight: bolder;
      font-size: 1.3rem;
      border-radius: 5px;
      color: #eeee;
    }
  }
`

export const Stacks = () => {
  const stackList = [
    'HTML',
    'CSS',
    'SCSS',
    'Javascript',
    'Typescript',
    'React',
    'Recoil',
    'styled-components',
  ]
  return (
    <Container>
      <ContentTitle title='Stack' />
      <ul className='stackbox'>
        {stackList.map((stack, idx) => (
          <li key={idx}>{stack}</li>
        ))}
      </ul>
    </Container>
  )
}
