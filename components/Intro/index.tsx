import { Container } from "./style";
import { TextAnimation } from "components";
import { FlipHorizontalMotion, FlipVerticalMotion, StaggerMotion } from "motion";
import { motion } from "framer-motion";
import { useAppSelector } from "hooks";

export const Intro = () => {
  const isDark = useAppSelector((state) => state.theme.value);
  const greetings = [
    "배우는 것을 좋아하고",
    "좋은 코드를 위한 리팩토링을 즐겨합니다",
    "코드개선 ・ 의사소통 ・ 협업을 잘하는",
    "프론트 개발자 박지윤입니다",
  ];

  return (
    <Container isdark={isDark}>
      <motion.div initial="start" whileInView="end" className="about__intro-greeting">
        <motion.p variants={FlipVerticalMotion}>WELCOME TO</motion.p>
        <motion.p variants={FlipVerticalMotion} transition={{ delay: 0.5 }}>
          Ji Yun PORTFOLIO
        </motion.p>

        <motion.div variants={StaggerMotion} initial="start" whileInView="end">
          {greetings.map((greet, idx) => (
            <TextAnimation key={idx} variants={FlipVerticalMotion} text={greet} />
          ))}
        </motion.div>
      </motion.div>

      <div className="about__intro-illust">
        <motion.img
          src="/static/woman.svg"
          width={300}
          height={300}
          alt="coding woman"
          initial="start"
          whileInView="end"
          variants={FlipHorizontalMotion}
          transition={{
            duration: 1,
          }}
        />
      </div>
    </Container>
  );
};
