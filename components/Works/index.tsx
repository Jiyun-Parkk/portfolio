import { Container, WorkList } from "./style";
import { Modal, ContentTitle, Overlay } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { motion } from "framer-motion";
import { modal } from "store/modules";
import { useState } from "react";
import { ShowupMotion } from "motion";

export const Works = () => {
  const [workName, setWorkName] = useState<string | null>(null);
  const workList = [
    { title: "Shroop", thumb: "/static/shroop.gif" },
    { title: "Late Pass", thumb: "/static/latepass.gif" },
    { title: "Chat Dog", thumb: "/static/chatdog.png" },
    { title: "룰루트레이닝", thumb: "/static/lulutraining.png" },
    { title: "Juju-Weather", thumb: "/static/jejuweather.png" },
    //{ title: "Coin-Tracker", thumb: "/static/cointracker.png" },
    // { title: "Portfolio", thumb: "/static/portfolio.png" },
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
