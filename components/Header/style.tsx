import styled from "styled-components";

export const Container = styled.header<{ isdark: boolean }>`
  position: fixed;
  z-index: 20;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;

  justify-content: space-evenly;
  transition: background 0.5s;

  &.active {
    background: ${(props) => (props.isdark ? "rgba(0, 0, 0, 0.4)" : "rgba(220, 220, 220, 0.4)")};
  }

  nav {
    padding-left: 20px;
    flex: 1;

    ul {
      display: flex;
      gap: 30px;

      li {
        position: relative;
        cursor: pointer;
        font-weight: bold;
        &.active {
          color: ${(props) => props.theme.text.point};
        }

        .circle {
          position: absolute;
          bottom: -15px;
          left: 50%;
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${(props) => props.theme.text.point};
        }
      }
    }

    button {
      display: none;
    }
  }

  button {
    padding: 20px;
    border-radius: 50%;
    padding: 0;
    aspect-ratio: 1;
    color: ${(props) => props.theme.text.basic};
    svg {
      flex: 1;
    }

    &.mobile-menubar {
      display: none;
    }
  }

  @media (max-width: 750px) {
    img {
      width: 80px;
      height: 50px;
    }
  }
  @media (max-width: 1200px) {
    justify-content: space-between;

    nav {
      position: absolute;
      z-index: 25;
      top: 0;
      right: -100%;
      width: 40%;
      background-color: ${(props) => props.theme.background.mobileNav};
      height: 100vh;
      transition: all 0.5s;

      ul {
        padding: 100px 0;
        flex-direction: column;

        li {
          .circle {
            display: none;
          }

          a {
            display: block;
            padding: 20px 5px;
            text-align: center;
          }
        }
      }

      button {
        display: flex;
        position: absolute;
        top: 20px;
        right: 10px;
        color: ${(props) => props.theme.text.basic};

        svg {
          width: 30px;
          height: 30px;
        }
      }
      &.active {
        right: 0;
      }
    }
    button {
      &.mobile-menubar {
        display: flex;
      }
    }
  }
`;
