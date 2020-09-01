import React from "react";

import Product from "../Product";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Product />
      </Wrapper>
    </Container>
  );
};

export default Layout;
