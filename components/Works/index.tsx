import { Container, WorkList, Overlay } from "./style";
import { Modal, ContentTitle } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { motion } from "framer-motion";
import { modal } from "store/modules";
import { useState } from "react";
import { ShowupMotion } from "motion";

export const Works = () => {
  const [workName, setWorkName] = useState<string | null>(null);
  const workList = [
    { title: "Coin-Tracker", thumb: "/static/cointracker.png" },
    { title: "Portfolio", thumb: "/static/portfolio.png" },
    { title: "Oz-Training", thumb: "/static/oztraining.png" },
    { title: "Export-JSON", thumb: "/static/jsonExport.png" },
  ];
  const isDark = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  return (
    <Container isdark={isDark}>
      <ContentTitle title="Project" />
      <motion.ul className="about__works-container">
        {workList.map((work, idx) => (
          <WorkList
            key={idx}
            variants={ShowupMotion}
            initial="start"
            whileInView="end"
            whileHover={{ scale: 0.9 }}
            layoutId={work.title}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            thumb={work.thumb}
            onClick={() => {
              setWorkName(work.title);
              dispatch(modal.isOpen(true));
            }}
          >
            <motion.div className="about__work-title">
              <h3>{work.title.replace("-", " ")}</h3>
              <p>Click here</p>
            </motion.div>
          </WorkList>
        ))}
      </motion.ul>
      {workName ? (
        <>
          <Overlay
            onClick={() => {
              setWorkName(null);
              dispatch(modal.isOpen(false));
            }}
          />
          <Modal title={workName} setWorkName={setWorkName} />
        </>
      ) : null}
    </Container>
  );
};
