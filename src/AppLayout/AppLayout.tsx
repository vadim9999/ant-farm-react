import React, { useContext, useEffect } from "react";
import { Layout, notification } from "antd";
import { Outlet } from "react-router-dom";
import { getUserId } from "api/api";
import videoService from "api/video-service/video.service";
import { GlobalContext } from "context/GlobalContextComponent";

import "./styles.scss";
import LocaleButton from "./Sidebar/LocaleButton/LocaleButton";
import Sidebar from "./Sidebar/Sidebar";

const { Header, Content } = Layout;

const AppLayout = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    Promise.all([getUserId(), videoService.isStreaming()])
      .then(([userIdData, isStreamingData]) => {
        dispatch({
          userId: String(userIdData.data),
          isStreaming: isStreamingData.data === "True" ? true : false,
        });
      })
      .catch(() => {
        notification.error({
          message: "Помилка в отриманні ідентифікатора користувача",
        });
      });
  }, []);

  return (
    <Layout id="layout" hasSider>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="header">
          <div className="locale">
            <LocaleButton />
          </div>
        </Header>

        <Content
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
