import styled from "styled-components";
import { Header, Footer } from "components";
import { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const Container = styled.main`
  position: relative;
  section {
    padding: 50px 30px;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
