import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;

  ul {
    padding: 0 16px;
    display: flex;
    justify-content: center;
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
  return (
    <Container>
      <h2>Stack</h2>
      <ul className='stackbox'>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Recoil</li>
      </ul>
    </Container>
  )
}
