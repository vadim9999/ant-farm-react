import { CoffeeOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import sensorsService from "api/sensors-service/sensors.service";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const FeedNow = () => {
  const { globalState } = useContext(GlobalContext);
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.feedNow",
  });

  const onFeedNow = () => {
    sensorsService.feedNow({ userId: globalState.userId }).then(() => {
      notification.success({
        message: t("notifications.feededSuccessfully"),
      });
    });
  };

  return (
    <Button
      type="primary"
      onClick={onFeedNow}
      size="large"
      icon={<CoffeeOutlined />}
    >
      {t("feedNow")}
    </Button>
  );
};

export default FeedNow;
