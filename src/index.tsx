import AppLayout from "AppLayout/AppLayout";
import GlobalContext from "context/GlobalContextComponent";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import "./config/i18n";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <AppLayout />
      </GlobalContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
