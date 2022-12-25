import styled from 'styled-components'
import { useAppSelector } from 'hooks'

const Container = styled.section<{ isDark: boolean }>`
  padding: 100px 20px;
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
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      width: 200px;
      height: 200px;
      background: ${(props) =>
        props.isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(220, 220, 220, 0.7)'};
      border-radius: 20px;
      cursor: pointer;
      h3 {
        flex: 1;
        font-weight: bolder;
        text-align: center;
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      li {
        width: 100%;
      }
    }
  }
`

export const Works = () => {
  const workList = ['Coin-Tracker', 'Devops-Blog', 'Portfolio', 'Oz-Traning']
  const isDark = useAppSelector((state) => state.theme.value)

  return (
    <Container isDark={isDark}>
      <h2 data-aos='fade-up'>Works</h2>
      <ul>
        {workList.map((work, idx) => (
          <li key={idx} data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}>
            <h3>{work.replace('-', ' ')}</h3>
          </li>
        ))}
      </ul>
    </Container>
  )
}
