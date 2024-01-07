import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  .timeline-box {
    width: 100%;
    margin-bottom: 200px;

    ul {
      width: 100%;
      display: flex;

      align-items: center;
      flex-direction: column;
      gap: 40px;

      li {
        width: 40%;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 10px;

        p {
          padding: 20px;
          &:nth-child(1) {
            width: 100%;
            height: 100%;
            font-weight: 600;
            border-radius: 10px 10px 0 0;
            border: 1px solid ${(props) => props.theme.text.basic};
          }
          &:nth-child(2) {
            color: #fff;
            background-color: #263159;
            overflow: hidden;
            border-radius: 0 0 10px 10px;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .timeline-box {
      ul {
        li {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 750px) {
    .timeline-box {
      ul {
        li {
          width: 100%;
          align-self: center;
        }
      }
    }
  }
`;
