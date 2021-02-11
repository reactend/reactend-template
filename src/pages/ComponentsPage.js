import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BaseLayout } from "../components/layout/BaseLayout";

export const ComponentsPage = () => (
  <BaseLayout>
    <Helmet>
      <title>React-end | Components</title>
    </Helmet>
    <Wrapper>
      <code>Sorry, it is in process...</code>
    </Wrapper>
  </BaseLayout>
);

const Wrapper = styled.div`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};

  h1 {
    margin: 10px 0;
  }
  p {
    margin-bottom: 10px;
  }
  p span {
    color: ${(props) => props.theme.colors.brandLight};
  }
`;
