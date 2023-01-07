import styled from "styled-components";

export const Container = styled.footer<{ isdark: boolean }>`
  width: 100%;
  padding: 30px;
  border-top: 1px solid
    ${(props) => (props.isdark ? "rgba(255, 255, 255, 0.2)" : " rgba(0, 0, 0, 0.3)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  .footer__links {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 30px;

    .footer__blog-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: 0.5rem;
      }
    }
  }

  .footer__copyright {
    display: flex;
    align-items: center;

    gap: 10px;
    font-size: 0.8rem;
    color: ${(props) => (props.isdark ? "rgba(255, 255, 255, 0.2)" : " rgba(0, 0, 0, 0.8)")};
  }
`;
