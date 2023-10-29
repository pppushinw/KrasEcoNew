import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./component/app/app";


const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
