import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)<{ listlength: number }>`
  /*height: 600vh;*/
  margin-bottom: 200px;

  .stackbox {
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    /*@media (max-width: 1440px) {
      width: ${(props) => `calc(${props.listlength * 330}px - 70vw)`};
    }
    @media (max-width: 1200px) {
      width: ${(props) => `calc(${props.listlength * 330}px - 60vw)`};
    }
    @media (max-width: 750px) {
      width: ${(props) => `calc(${props.listlength * 330}px + 2vw)`};
    }*/
  }
`;

export const StackList = styled(motion.li)<{ background: string }>`
  place-self: flex-start;
  height: 300px;
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
    width: 300px;
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
