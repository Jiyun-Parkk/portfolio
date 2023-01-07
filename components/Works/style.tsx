import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section<{ isdark: boolean }>`
  p {
    text-align: center;
    line-height: 2;
  }
  .about__works-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
`;

export const WorkList = styled(motion.li)<{ thumb: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: ${(props) => `url(${props.thumb}) no-repeat center / cover`};
  border-radius: 20px;
  cursor: pointer;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.5);
    content: "";
    display: block;
  }
  .about__work-title {
    flex: 1;
    z-index: 10;
    h3 {
      font-size: 1.5rem;
      font-weight: bolder;
      text-align: center;
      color: #fff;
      text-shadow: -2px 0 0 ${(props) => props.theme.text.point};
    }
    p {
      padding: 0;
      font-size: 14px;
      color: #fff;
    }
  }
  @media (max-width: 1200px) {
    width: 98%;
    &:hover {
      transform: none;
    }
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 25;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
