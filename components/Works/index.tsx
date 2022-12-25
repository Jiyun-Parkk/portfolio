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
  const isDark = useAppSelector((state) => state.theme.value)

  return (
    <Container isDark={isDark}>
      <h2>Works</h2>
      <ul>
        <li>
          <h3>Coin Tracker</h3>
        </li>
        <li>
          <h3>Devops Blog</h3>
        </li>
        <li>
          <h3>Portfolio</h3>
        </li>
        <li>
          <h3>Oz Training</h3>
        </li>
      </ul>
    </Container>
  )
}
