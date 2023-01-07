import { Container } from "./style";
import { motion } from "framer-motion";
import { useAppSelector } from "hooks";
import { HighlightOffOutlined, GitHub, LinkOutlined, RateReview } from "@mui/icons-material";
import workContents from "./data";
import { Button } from "@mui/material";

interface ModalProps {
  title: string;
}

const WorkModal = ({ title }: ModalProps) => {
  const isDark = useAppSelector((state) => state.theme.value);
  let content;

  switch (title) {
    case "Coin-Tracker":
      content = workContents["Coin-Tracker"];
      break;
    case "Portfolio":
      content = workContents["Portfolio"];
      break;
    case "Oz-Training":
      content = workContents["Oz-Training"];
      break;
  }

  return (
    <Container isdark={isDark.toString()}>
      <motion.div className="box" layoutId={title} transition={{ ease: "linear", duration: 0.2 }}>
        <Button type="button" className="modal-close-btn">
          <HighlightOffOutlined />
        </Button>
        <h3 className="work-title">{title.replace("-", " ")}</h3>
        <div className="work-content-box">
          <h4>Description</h4>
          <p>{content?.detail}</p>
        </div>
        <div className="work-content-box">
          <h4>Contribution</h4>
          <ul>
            <li>
              <strong>구성원:</strong> {content?.contribution.team}
            </li>
            <li>
              <strong>기여도:</strong> {content?.contribution.contribute}
            </li>
          </ul>
        </div>
        <div className="work-content-box">
          <h4>Used Skills</h4>
          <p>{content?.stack}</p>
        </div>
        <div className="work-content-box">
          <h4>Points</h4>
          <ul>
            {content?.point.map((point, idx) => (
              <li key={idx}>◉ {point}</li>
            ))}
          </ul>
        </div>

        <div className="work-content-box">
          <h4>Source</h4>
          <div className="source-box">
            <a href={content?.source.git} target="_blank" rel="referrer noreferrer">
              <GitHub />
              <span>GIT</span>
            </a>
            {content?.source.link && (
              <a href={content?.source.link} target="_blank" rel="referrer noreferrer">
                <LinkOutlined />
                <span>LINK</span>
              </a>
            )}
            {content?.source.notion && (
              <a href={content?.source.notion} target="_blank" rel="referrer noreferrer">
                <RateReview />
                <span>Notion</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default WorkModal;
