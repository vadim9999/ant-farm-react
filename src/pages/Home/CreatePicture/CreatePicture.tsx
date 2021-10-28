import { CameraOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const CreatePicture = () => {
  return (
    <div>
      <Input placeholder="Ім'я відеофайлу" style={{ width: 400 }} />
      <Select
        defaultValue="854x480"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="1280x720">1280x720</Option>
        <Option value="854x480">854x480</Option>
        <Option value="426x240">426x240</Option>
      </Select>
      <Button type="primary" icon={<CameraOutlined />} size="large">
        Створити зображення
      </Button>
    </div>
  );
};

export default CreatePicture;
