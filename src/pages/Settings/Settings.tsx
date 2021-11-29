import React, { useContext, useEffect, useReducer } from "react";
import { Button, Card, Col, notification, Row, Space, Spin } from "antd";
import settingsService from "api/settings-service/settings.service";
import { GlobalContext } from "context/GlobalContextComponent";
import StreamingSettingsForm from "./StreamingSettingsForm/StreamingSettingsForm";
import { StreamingSettingsFormValues } from "./StreamingSettingsForm/typesStreamingSettingsForm";
import FeedSettingsForm from "./FeedSettingsForm/FeedSettingsForm";
import { FeedSettingsFormValues } from "./FeedSettingsForm/typesFeedSettingsForm";
import { PoweroffOutlined, RetweetOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface State {
  initialValuesStream: StreamingSettingsFormValues | null;
  initialValuesFeeder: FeedSettingsFormValues | null;
}

const Settings = () => {
  const { t } = useTranslation("translation", { keyPrefix: "settings" });

  const { globalState } = useContext(GlobalContext);
  const [state, setState] = useReducer(
    (prevState: State, nextState: Partial<State>): State => ({
      ...prevState,
      ...nextState,
    }),
    {
      initialValuesStream: null,
      initialValuesFeeder: null,
    }
  );

  const onGetStreamSettings = () => {
    // TODO change naming on backend side
    settingsService
      .getStreamSettings({ userId: globalState.userId })
      .then((streamSettings) => {
        setState({
          initialValuesStream: {
            youtubeKey: streamSettings.key,
            youtubeLink: streamSettings.youtube,
          },
        });
      });
  };

  const onGetFeederSettings = () => {
    settingsService.getSettingsFeeder().then((feederInterval) => {
      setState({
        initialValuesFeeder: {
          interval: feederInterval,
        },
      });
    });
  };

  useEffect(() => {
    onGetStreamSettings();
    onGetFeederSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSaveStreamSettings = (formValues: StreamingSettingsFormValues) => {
    settingsService
      .saveStreamSettings({
        userId: globalState.userId,
        youtube: formValues.youtubeLink,
        key: formValues.youtubeKey,
      })
      .then((data) => {
        console.log("data", data);
        onGetStreamSettings();
        notification.success({
          message: t("notifications.savedYoutubeSettings"),
        });
      });
  };

  const onSaveFeedSettings = (formValues: FeedSettingsFormValues) => {
    settingsService
      .setSettingsFeeder({
        interval: formValues.interval,
        userId: globalState.userId,
      })
      .then((data) => {
        console.log("data1", data);
        onGetFeederSettings();
        notification.success({
          message: t("notifications.savedFeedSettings"),
        });
      });
  };

  const onShutDownRPI = () => {
    settingsService.shutDownRPI({ userId: globalState.userId }).then(() => {
      notification.success({
        message: t("notifications.powerOff"),
      });
    });
  };

  const onRebootRPI = () => {
    settingsService.rebootRPI({ userId: globalState.userId }).then(() => {
      notification.success({
        message: t("notifications.rebooting"),
      });
    });
  };

  //TODO split on two components and use it here
  return (
    <>
      <Row>
        <Col style={{ width: 400 }}>
          <Card title={t("youtubeSettings")}>
            {state.initialValuesStream ? (
              <StreamingSettingsForm
                initialValues={state.initialValuesStream}
                onSubmit={onSaveStreamSettings}
              />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col style={{ width: 400 }}>
          <Card title={t("feedSettings")}>
            {state.initialValuesFeeder ? (
              <FeedSettingsForm
                onSubmit={onSaveFeedSettings}
                initialValues={state.initialValuesFeeder}
              />
            ) : (
              <Spin />
            )}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Керування фермою">
            <Space direction="vertical">
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                onClick={onShutDownRPI}
              >
                Вимкнути
              </Button>
              <Button
                type="primary"
                icon={<RetweetOutlined />}
                onClick={onRebootRPI}
              >
                Перезавантажити
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
