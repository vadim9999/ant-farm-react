import { PauseOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const VideoRecording = () => {
  return (
    <div>
      <Input placeholder="Ім'я відеофайлу" style={{ width: 400 }} />
      <Select
        defaultValue="480"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="720">740</Option>
        <Option value="480">480</Option>
        <Option value="240">240</Option>
      </Select>
      <Button type="primary" icon={<PlayCircleOutlined />} size="large">
        Почати запис
      </Button>
      <Button
        type="primary"
        danger
        icon={<PauseOutlined />}
        size="large"
        disabled
      >
        Зупинити запис
      </Button>
    </div>
  );
};

export default VideoRecording;
