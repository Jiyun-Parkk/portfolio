import { Container } from "./style";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "hooks";
import { GitHub, HighlightOffOutlined, Link, LinkOutlined, RateReview } from "@mui/icons-material";
import workContents, { WorkType } from "./data";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch } from "hooks";
import { modal } from "store/modules";
import { FaNpm } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";

interface ModalProps {
  title: string;
  setWorkName: Dispatch<SetStateAction<string | null>>;
}

export const Modal = ({ title, setWorkName }: ModalProps) => {
  const isDark = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const [content, setContent] = useState<WorkType | null>(null);
  console.log(workContents[title]);
  useEffect(() => {
    setContent(workContents[title]);
  }, [title]);

  return (
    <AnimatePresence>
      <Container
        isdark={isDark.toString()}
        layoutId={title}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <div className="work-content-top">
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
        </div>
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

        {content?.report && (
          <div className="work-content-box report">
            <h4>Report</h4>
            <small>아래 리스트를 클릭하시면 관련 링크로 이동합니다</small>
            <ul>
              {content.report.map((report) => (
                <li key={report.title}>
                  <a href={report.link} target="_blank" rel="referrer noreferrer">
                    <h5>{report.title}</h5>
                    <Link />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

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
                <RxNotionLogo />
                <span>Notion</span>
              </a>
            )}
            {content?.source.npm && (
              <a href={content?.source.npm} target="_blank" rel="referrer noreferrer">
                <FaNpm />
                <span>NPM PKG</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </AnimatePresence>
  );
};
