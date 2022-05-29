import React from "react";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import { Locale } from "context/GlobalContextComponent";
import { useTranslation } from "react-i18next";

const languages = {
  [Locale.En]: "EN",
  [Locale.Uk]: "UK",
};

const LocaleButton = () => {
  const { i18n } = useTranslation();
  const onClickMenuItem: MenuProps["onClick"] = (e) => {
    i18n.changeLanguage(e.key);
  };

  const menu = (
    <Menu onClick={onClickMenuItem}>
      <Menu.Item key={Locale.En}>{languages[Locale.En]}</Menu.Item>
      <Menu.Item key={Locale.Uk}>{languages[Locale.Uk]}</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button type="primary">{languages[i18n.language as Locale]}</Button>
      </Dropdown>
    </div>
  );
};

export default LocaleButton;
