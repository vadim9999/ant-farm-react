import { CoffeeOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import sensorsService from "api/sensors-service/sensors.service";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext } from "react";

const locales = {
  feedNow: "Погодувати зараз",
  feeded: "Погодовано успішно",
};

const FeedNow = () => {
  const { globalState } = useContext(GlobalContext);

  const onFeedNow = () => {
    sensorsService.feedNow({ userId: globalState.userId }).then(() => {
      notification.success({
        message: locales.feeded,
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
      {locales.feedNow}
    </Button>
  );
};

export default FeedNow;
