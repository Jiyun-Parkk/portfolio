import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  h2 {
    flex-basis: 50%;
  }
  ul {
    flex-basis: 50%;
    padding: 0 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    li {
      padding: 5px 7px;
      background: #263159;
      text-align: center;
      font-weight: bolder;
      font-size: 14px;
      border-radius: 5px;
      color: #eeee;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 40px;
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
      <h2 className='about__stack-title' data-aos='fade-up'>
        Stack
      </h2>
      <ul className='stackbox'>
        {stackList.map((stack, idx) => (
          <li data-aos='flip-up' data-aos-delay='100' key={idx}>
            {stack}
          </li>
        ))}
      </ul>
    </Container>
  )
}
