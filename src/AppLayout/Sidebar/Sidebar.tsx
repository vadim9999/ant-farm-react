import React from "react";
import { Layout, Menu, Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import logo from "resources/logo.png";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

const Sidebar = () => {
  const { t } = useTranslation("translation", { keyPrefix: "appLayout" });
  const location = useLocation();

  return (
    <Sider
      width={200}
      className="sider"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logoWithText">
        <img className="logo" src={logo} alt="logo" />
        <Typography.Text strong className="text">
          {t("header.logoText")}
        </Typography.Text>
      </div>
      <Menu mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            <Space>
              <DashboardOutlined />
              {t("sidebar.dashboard")}
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key="/video-streaming">
          <Link to="/video-streaming">
            <Space>
              <VideoCameraOutlined />
              {t("sidebar.videoStreaming")}
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key="/media-files">
          <Link to="/media-files">
            <Space>
              <FolderOpenOutlined />
              {t("sidebar.mediaFiles")}
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key="/settings">
          <Link to="/settings">
            <Space>
              <SettingOutlined />
              {t("sidebar.settings")}
            </Space>
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">
            <Space>
              <SettingOutlined />
              {t("sidebar.about")}
            </Space>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
