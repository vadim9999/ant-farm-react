import {
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Select } from "antd";
import React from "react";

const { Option } = Select;

const StreamingControls = () => {
  return (
    <div>
      <Button type="primary" icon={<PlayCircleOutlined />} size="large">
        Почати трансляцію
      </Button>

      <Button
        type="primary"
        danger
        icon={<PauseOutlined />}
        size="large"
        disabled
      >
        Зупинити трансляцію
      </Button>
      <Select
        defaultValue="480"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="720">740</Option>
        <Option value="480">480</Option>
        <Option value="240">240</Option>
      </Select>
    </div>
  );
};

export default StreamingControls;
