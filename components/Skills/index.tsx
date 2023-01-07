import stackList from "./data";
import { Container, StackList } from "./style";
import { ContentTitle } from "components/ContentTitle";
import { ShowMotion } from "motion";
import { Lightbulb } from "@mui/icons-material";

export const Skills = () => {
  return (
    <Container>
      <ContentTitle title="Skills" />
      <ul className="stackbox">
        {stackList.map((stack, idx) => (
          <StackList
            variants={ShowMotion}
            initial="start"
            whileInView="end"
            key={idx}
            background={stack.background}
            transition={{
              duration: 0.5,
            }}
          >
            <div>
              <ul>
                {stack.point.map((point, idx) => (
                  <li key={idx}>
                    <Lightbulb /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <h4>{stack.title}</h4>
          </StackList>
        ))}
      </ul>
    </Container>
  );
};
