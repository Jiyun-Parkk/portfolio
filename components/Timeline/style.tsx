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
        width: 300px;
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
            background-color: ${(props) => props.theme.background.bannerTitle};
          }
          &:nth-child(2) {
            background-color: ${(props) => props.theme.background.bannerContent};
            overflow: hidden;
          }
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
