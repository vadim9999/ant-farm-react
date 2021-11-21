import React, { useContext, useEffect, useReducer, useState } from "react";
import { Card, Col, notification, Row, Spin } from "antd";
import { getStreamSettings, saveStreamSettings, videoService } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";
import StreamingSettingsForm from "./StreamingSettingsForm/StreamingSettingsForm";
import { StreamingSettingsFormValues } from "./StreamingSettingsForm/typesStreamingSettingsForm";
import FeedSettingsForm from "./FeedSettingsForm/FeedSettingsForm";
import { FeedSettingsFormValues } from "./FeedSettingsForm/typesFeedSettingsForm";

interface State {
  initialValuesStream: StreamingSettingsFormValues | null;
  initialValuesFeeder: FeedSettingsFormValues | null;
}

const Settings = () => {
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

  useEffect(() => {
    Promise.all([
      getStreamSettings({ userId: globalState.userId }),
      videoService.getSettingsFeeder(),
    ]).then(([streamSettings, feederInterval]) => {
      // TODO change naming on backend side
      setState({
        initialValuesStream: {
          youtubeKey: streamSettings.key,
          youtubeLink: streamSettings.youtube,
        },
        initialValuesFeeder: {
          interval: feederInterval,
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSaveStreamSettings = (formValues: StreamingSettingsFormValues) => {
    saveStreamSettings({
      userId: globalState.userId,
      youtube: formValues.youtubeLink,
      key: formValues.youtubeKey,
    }).then((data) => {
      notification.success({
        message: "Налаштування для відеотрансляції в YouTube збережені",
      });
    });
  };

  const onSaveFeedSettings = (formValues: FeedSettingsFormValues) => {
    videoService
      .setSettingsFeeder({
        interval: formValues.interval,
        userId: globalState.userId,
      })
      .then(() => {
        notification.success({
          message: "Налаштування для годівниці збережені",
        });
      });
  };

  return (
    <>
      <Row>
        <Col style={{ width: 400 }}>
          <Card title="Youtube settings">
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
          <Card title="Налаштування годівниці">
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
    </>
  );
};

export default Settings;
