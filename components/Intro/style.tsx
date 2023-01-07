import styled from "styled-components";

export const Container = styled.section<{ isdark: boolean }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .about__intro-greeting {
    flex-basis: 50%;
    width: 100%;
    place-self: flex-start;
    line-height: 2;
    font-size: 1rem;
    padding: 80px 0;
    z-index: 2;

    p {
      color: ${(props) => props.theme.text.point};
      flex-basis: 50%;
      font-size: 2rem;
      font-weight: bolder;
      text-shadow: -2px 0px 0 darkgray;
      letter-spacing: 5px;
      line-height: 1.5;
      &:nth-child(2) {
        margin-bottom: 20px;
      }
    }

    .explain-me {
      span {
        color: ${(props) => props.theme.text.point};
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        text-shadow: -2px 0px 0 darkgray;
        display: inline-block;
      }
    }

    @media (max-width: 1200px) {
      padding: 0;
      flex: 1;
      place-self: center;
    }

    @media (max-width: 750px) {
      p {
        font-size: 2rem;
      }
    }
  }

  .about__intro-illust {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 500px;
      height: 500px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
    img {
      flex: 1;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  button {
    color: inherit;
    svg {
      font-size: 2rem;
    }
  }
`;
