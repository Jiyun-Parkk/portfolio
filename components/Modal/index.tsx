import { Container } from "./style";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "hooks";
import { GitHub, HighlightOffOutlined, LinkOutlined, RateReview } from "@mui/icons-material";
import workContents from "./data";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "hooks";
import { modal } from "store/modules";

interface ModalProps {
  title: string;
  setWorkName: Dispatch<SetStateAction<string | null>>;
}

export const Modal = ({ title, setWorkName }: ModalProps) => {
  const isDark = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
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
    <AnimatePresence>
      <Container
        isdark={isDark.toString()}
        layoutId={title}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <h3 className="work-title">{title.replace("-", " ")}</h3>
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => {
            setWorkName(null);
            dispatch(modal.isOpen(false));
          }}
        >
          <HighlightOffOutlined />
        </button>
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
      </Container>
    </AnimatePresence>
  );
};
