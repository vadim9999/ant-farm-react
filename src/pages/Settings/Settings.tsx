import { Card, Spin } from "antd";
import { getStreamSettings, saveStreamSettings } from "api/api";
import { GetStreamSettingsResponse } from "api/typesApiResponse";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext, useEffect, useState } from "react";
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
  }, []);

  const onSaveStreamSettings = (formValues: StreamingSettingsFormValues) => {
    saveStreamSettings({
      userId: globalState.userId,
      youtube: formValues.youtubeLink,
      key: formValues.youtubeKey,
    }).then((data) => {
      console.log("data", data);
    });
    console.log("call");
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
