import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu, Space, Spin, Typography } from "antd";
import Router from "Router";
import { Link, useLocation } from "react-router-dom";
import { routes } from "routes";
import { getUserId, videoService } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";
import {
  DashboardOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import logo from "resources/logo.png";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();
  const { globalState, dispatch } = useContext(GlobalContext);
  console.log("location", location);
  const [isLoading, setIsLoading] = useState(true);
  console.log("logog", logo);

  useEffect(() => {
    Promise.all([getUserId(), videoService.isStreaming()]).then(
      ([userIdData, isStreamingData]) => {
        dispatch({
          userId: String(userIdData.data),
          isStreaming: isStreamingData.data === "True" ? true : false,
        });
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <Layout>
      <Header
        className="header"
        // style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        {/* <div className="logo" /> */}
        <img height="36" width="36" src={logo} alt="logo" />
        <Typography.Text strong style={{ color: "gray", marginLeft: 15 }}>
          Мурашина ферма
        </Typography.Text>
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
            {isLoading ? <Spin /> : <Router />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
