import React from "react";
import Header from "../header/header";
import MainPage from "../../page/main-page/main-page";
import styled from "styled-components";

export const StyledPageWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 20px 50px;
`

const container = {
  display: "flex",
  alignItems: "flex-start",
  fontFamily: "sans-serif"
}

// Обёртка для контента страниц
export default function PageWrapper() {
  return (
    <div style={container}>
      <Header />
      <StyledPageWrapper>
        <MainPage />
      </StyledPageWrapper>
    </div>

  );
}
