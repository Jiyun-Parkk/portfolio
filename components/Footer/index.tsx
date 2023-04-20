import { Container } from "./style";
import { useAppSelector } from "hooks";
import { CopyrightOutlined, GitHub, LocalCafeTwoTone } from "@mui/icons-material";

export const Footer = () => {
  const isDark = useAppSelector((state) => state.theme.value);
  return (
    <Container isdark={isDark}>
      <div className="footer__links">
        <a href="https://github.com/Jiyun-Parkk/" rel="noreferrer" target="_blank">
          <GitHub />
        </a>
        <a
          className="footer__blog-link"
          href="https://june-dev.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <LocalCafeTwoTone />
          <span>BLOG</span>
        </a>
      </div>
      <div className="footer__copyright">
        <CopyrightOutlined />
        <span>2022. Jiyun Park All rights reserved</span>
      </div>
    </Container>
  );
};
