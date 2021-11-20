import React, { useContext, useEffect, useState } from "react";
import { Card, notification, Spin } from "antd";
import { getStreamSettings, saveStreamSettings } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";
import StreamingSettingsForm from "./StreamingSettingsForm/StreamingSettingsForm";
import { StreamingSettingsFormValues } from "./StreamingSettingsForm/typesStreamingSettingsForm";

const Settings = () => {
  const { globalState } = useContext(GlobalContext);
  const [initialValues, setInitialValues] =
    useState<StreamingSettingsFormValues>();

  useEffect(() => {
    getStreamSettings({ userId: globalState.userId }).then((data) => {
      console.log("data", data);
      // TODO change naming on backend side
      setInitialValues({ youtubeKey: data.key, youtubeLink: data.youtube });
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

  return (
    <Card title="Youtube settings" style={{ width: 500 }}>
      {initialValues ? (
        <StreamingSettingsForm
          initialValues={initialValues}
          onSubmit={onSaveStreamSettings}
        />
      ) : (
        <Spin />
      )}
    </Card>
  );
};

export default Settings;
