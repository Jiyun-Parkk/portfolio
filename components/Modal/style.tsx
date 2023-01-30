import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)<{ isdark: string }>`
  position: fixed;
  top: 10%;
  left: 10%;
  line-height: 2;
  width: 80%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.background.lighter};
  height: 80vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 30;

  p {
    text-align: left;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  /* 컨텐츠 */
  h3,
  h4 {
    color: ${(props) => props.theme.text.point};
    flex-basis: 50%;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: -2px 0px 0 darkgray;
  }

  .work-content-top {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.background.mobileNav};

    .work-title {
      white-space: nowrap;
      font-size: 30px;
      font-weight: bolder;
      border-bottom: 1px solid
        ${(props) => (props.isdark === "true" ? "rgba(255, 255, 255, 0.2)" : " rgba(0, 0, 0, 0.3)")};
    }

    .modal-close-btn {
      place-self: flex-end;
      color: #fff;
      width: 50px;
      height: 50px;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        width: 30px;
        height: 30px;
        fill: ${(props) => props.theme.text.point};
      }
    }
  }

  .work-content-box {
    padding: 20px 30px;
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

  @media (max-width: 750px) {
    width: 90%;
    left: 5%;
    /*padding: 20px;*/
  }
`;
