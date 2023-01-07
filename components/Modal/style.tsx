import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)<{ isdark: string }>`
  flex: 1;
  line-height: 2;
  position: relative;

  .box {
    position: relative;
    margin: 0 auto;
    width: 80%;
    border-radius: 20px;
    background-color: ${(props) => props.theme.background.lighter};
    padding: 20px 50px;
    height: 80vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      text-align: left;
    }

    .modal-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      place-self: flex-end;
      color: #fff;
      width: 50px;
      height: 50px;
      svg {
        width: 30px;
        height: 30px;
        fill: ${(props) => props.theme.text.point};
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 750px) {
    .box {
      width: 90%;
      padding: 20px;
    }
  }

  /* 컨텐츠 */
  h3,
  h4 {
    color: ${(props) => props.theme.text.point};
    flex-basis: 50%;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: -2px 0px 0 darkgray;
    &.work-title {
      font-size: 30px;
      font-weight: bolder;
      padding-bottom: 30px;
      border-bottom: 1px solid
        ${(props) => (props.isdark === "true" ? "rgba(255, 255, 255, 0.2)" : " rgba(0, 0, 0, 0.3)")};
    }
  }
  .work-content-box {
    strong {
      font-weight: 600;
    }

    .source-box {
      display: flex;
      gap: 20px;

      a {
        display: flex;

        align-items: center;
        flex-direction: column;
        svg {
          width: 30px;
          height: 30px;
        }
        span {
          font-size: 0.5rem;
        }
      }
    }
  }
`;
