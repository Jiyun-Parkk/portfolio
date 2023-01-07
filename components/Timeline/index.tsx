import timeline from "./data";
import { Container } from "./style";
import { ShowupMotion } from "motion";
import { ContentTitle } from "components/ContentTitle";
import { motion } from "framer-motion";

export const Timelines = () => {
  return (
    <Container>
      {timeline.map((time, idx) => (
        <div className="timeline-box" key={idx}>
          <ContentTitle title={time.title} />
          <motion.ul
            variants={ShowupMotion}
            initial="start"
            whileInView="end"
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {time.list.map((list, idx) => (
              <motion.li key={idx}>
                <p>{list.date}</p>
                <p>{list.history}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </Container>
  );
};
