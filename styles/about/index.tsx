import styled from 'styled-components'

export const Intro = styled.section<{ isDark: boolean }>`
  height: 100vh;
  margin: 0 20px;
  padding: 0px 30px;
  border-bottom: 1px solid
    ${(props) =>
      props.isDark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .about__intro-illust {
    background: ${(props) =>
      props.isDark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
    width: 500px;
    border-radius: 100%;
    aspect-ratio: 1;
    img {
      transform: rotateY(180deg);
    }

    @media (max-width: 750px) {
      width: 300px;
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
  .about__intro-greeting {
    line-height: 2;
    font-size: 20px;
    text-align: center;
    padding-bottom: 30px;
    font-weight: bold;
  }
`

export const InfoBox = styled.section<{ isDark: boolean }>`
  margin: 0 20px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid
    ${(props) =>
      props.isDark ? 'rgba(255, 255, 255, 0.2)' : ' rgba(0, 0, 0, 0.3)'};
  gap: 60px;
  h2 {
    color: ${(props) => props.theme.text.point};
    flex-basis: 50%;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: -2px 0px 0 darkgray;
  }
`
