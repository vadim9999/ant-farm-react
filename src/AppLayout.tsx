import React from "react";
import { Layout, Menu } from "antd";
import Router from "Router";
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header
        className="header"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <div className="logo" />
        Header
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
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            // style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
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
