import GlobalContext from "context/GlobalContextComponent";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "./config/i18n";
import Router from "Router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <Router />
      </GlobalContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
