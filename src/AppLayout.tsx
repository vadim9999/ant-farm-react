import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu, Spin } from "antd";
import Router from "Router";
import "antd/dist/antd.css";
import { Link, useLocation } from "react-router-dom";
import { routes } from "routes";
import { getUserId } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();
  const { globalState, dispatch } = useContext(GlobalContext);
  console.log("location", location);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserId().then((res) => {
      // TODO add enpoint of getting is streaming
      console.log("data", res);
      dispatch({ userId: String(res.data) });
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Header
        className="header"
        // style={{ position: "fixed", zIndex: 1, width: "100%" }}
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
            selectedKeys={[location.pathname]}
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            // style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key={routes.dashboard}>
              <Link to={routes.dashboard}>Моніторинг</Link>
            </Menu.Item>
            <Menu.Item key={routes.videoStreaming}>
              <Link to={routes.videoStreaming}>Відеотрансляція</Link>
            </Menu.Item>
            <Menu.Item key="3">Медіафайли</Menu.Item>
            <Menu.Item key={routes.settings}>
              <Link to={routes.settings}>Налаштування</Link>
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
