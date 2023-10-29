import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;
  }

`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper />
    </>

  );
}
