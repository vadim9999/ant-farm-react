import { Card, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about" });

  return (
    <Card style={{ width: 800 }} title={t("diplomaProject")}>
      <Typography.Text>
        Тема: Розробка програмного забезпечення для моніторингу та управління
        мурашиною фермою
      </Typography.Text>
      <br />
      <Typography.Text>
        Виконав студент групи 121-19зск-1 Путров Вадим Дмитрович
      </Typography.Text>
      <br />
      <Typography.Text>
        Керівник дипломного проекту Приходченко Сергій Дмитрович
      </Typography.Text>
    </Card>
  );
};

export default About;
