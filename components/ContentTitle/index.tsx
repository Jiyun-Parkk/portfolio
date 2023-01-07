import { FlipVerticalMotion } from "motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const Title = styled(motion.h2)`
  color: ${(props) => props.theme.text.point};
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  text-shadow: -2px 0px 0 darkgray;
  padding: 100px 0 200px 0;

  @media (max-width: 750px) {
    padding-top: 0;
  }
`;

export const ContentTitle = ({ title }: { title: string }) => {
  return (
    <Title
      initial="start"
      whileInView="end"
      variants={FlipVerticalMotion}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {title}
    </Title>
  );
};
