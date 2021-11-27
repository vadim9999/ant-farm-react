import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu, notification, Space, Spin, Typography } from "antd";
import Router from "Router";
import { Link, useLocation } from "react-router-dom";
import { routes } from "routes";
import { getUserId } from "api/api";
import videoService from "api/video-service/video.service";
import { GlobalContext, Locale } from "context/GlobalContextComponent";
import {
  DashboardOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import logo from "resources/logo.png";
import "./styles.scss";
import LocaleButton from "./LocaleButton/LocaleButton";
import { useTranslation } from "react-i18next";
const { Header, Sider, Content } = Layout;

const locales = {
  [Locale.En]: "Ant Farm",
  [Locale.Uk]: "Мурашина ферма",
};

const AppLayout = () => {
  const location = useLocation();
  const { globalState, dispatch } = useContext(GlobalContext);
  console.log("location", location);
  const [isLoading, setIsLoading] = useState(true);
  console.log("logog", logo);

  const { t } = useTranslation();

  useEffect(() => {
    Promise.all([getUserId(), videoService.isStreaming()])
      .then(([userIdData, isStreamingData]) => {
        dispatch({
          userId: String(userIdData.data),
          isStreaming: isStreamingData.data === "True" ? true : false,
        });

        // setIsLoading(false);
      })
      .catch(() => {
        notification.error({
          message: "Помилка в отриманні ідентифікатора користувача",
        });
      });
  }, []);

  return (
    <Layout>
      <Header
        className="header"
        // style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        {/* <div className="logo" /> */}
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <div className="logoWithText">
          <img className="logo" src={logo} alt="logo" />
          <Typography.Text strong className="text">
            {t("appLayout.logoText")}
          </Typography.Text>
        </div>
        <div className="locale">
          <LocaleButton />
        </div>
        {/* </div> */}
      </Header>
      <Layout className="site-layout">
        <Sider
          width={200}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "calc(100vh - 64px)",
            // marginTop: '64px',
            position: "fixed",
            bottom: 0,
            left: 0,
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            // style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key={routes.dashboard}>
              <Link to={routes.dashboard}>
                <Space>
                  <DashboardOutlined /> Моніторинг
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.videoStreaming}>
              <Link to={routes.videoStreaming}>
                <Space>
                  <VideoCameraOutlined /> Відеотрансляція
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.mediaFiles}>
              <Link to={routes.mediaFiles}>
                <Space>
                  <FolderOpenOutlined /> Медіафайли
                </Space>
              </Link>
            </Menu.Item>
            <Menu.Item key={routes.settings}>
              <Link to={routes.settings}>
                <Space>
                  <SettingOutlined />
                  Налаштування
                </Space>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px", marginLeft: "200px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              // minHeight: 280,
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
