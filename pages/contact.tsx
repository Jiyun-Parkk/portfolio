import { Button, TextField } from "@mui/material";
import { useAppSelector } from "hooks";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ShowupMotion, FlipHorizontalMotion } from "motion";
import { NextPage } from "next";
import { Mail } from "@mui/icons-material";

const Container = styled.section<{ isdark: boolean }>`
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  height: 100%;
  line-height: 2;
  padding-bottom: 200px !important;

  .contact__intro-illust {
    display: flex;

    align-items: center;
    position: relative;

    .illust-circle {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      background: ${(props) => (props.isdark ? "rgba(255, 255, 255, 0.2)" : " rgba(0, 0, 0, 0.3)")};
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }
    img {
      flex: 1;
      transform: rotateY(180deg);
    }
  }

  .contact__mail {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;

    p {
      text-align: center;
    }

    .mail {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;

const Contact: NextPage = () => {
  const isDark = useAppSelector((state) => state.theme.value);

  return (
    <Container isdark={isDark}>
      <div className="contact__intro-illust">
        <div className="illust-circle"></div>
        <motion.img
          src="/static/contact.svg"
          width={300}
          height={300}
          alt="contact"
          initial="start"
          whileInView="end"
          variants={FlipHorizontalMotion}
          transition={{
            duration: 1,
          }}
        />
      </div>
      <motion.div
        variants={ShowupMotion}
        initial="start"
        whileInView="end"
        transition={{
          when: "beforeChildren",
          staggerChildren: 0.2,
        }}
        className="contact__mail"
      >
        <motion.p variants={ShowupMotion}>
          채용 혹은 궁금한 점은 <br /> 아래 메일로 문의주세요 😀
        </motion.p>
        <motion.div className="mail" variants={ShowupMotion}>
          <Mail />
          <span>jyun1937@naver.com</span>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Contact;
