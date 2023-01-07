import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 200px 0;
  align-items: center;

  .stackbox {
    width: 100%;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 150px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const StackList = styled(motion.li)<{ background: string }>`
  width: 100%;
  height: 200px;
  background: ${(props) => props.background};
  text-align: center;
  font-weight: bolder;
  font-size: 1.1rem;
  border-radius: 5px;
  color: #eeee;
  position: relative;

  h4 {
    position: absolute;
    font-size: 2rem;
    bottom: -10px;
    right: 30px;
    color: transparent;
    font-weight: 600;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${(props) => props.theme.text.basic};
  }

  div {
    margin: 30px 20px;
    height: 100%;
    background: ${(props) => props.theme.background.gray};
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px;
    line-height: 2;
    color: ${(props) => props.theme.text.basic};

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        display: flex;
        gap: 5px;
        width: 100%;
        text-align: left;
      }
    }
  }
`;
