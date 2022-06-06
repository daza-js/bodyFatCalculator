import React from "react";
import Container from "./container";
import Main from "./main";
import Navbar from "./navbar";

type TypesLayout = {
  children: React.ReactNode;
};

const Layout: React.FC<TypesLayout> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
