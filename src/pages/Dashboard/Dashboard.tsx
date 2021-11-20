import React, { useEffect, useState } from "react";
import { Card, Col, Progress, Row, Space } from "antd";
import { videoService } from "api/api";
import { SensorDHTName, SensorsData } from "api/typesApiResponse";

// TODO move to separate file styles.ts

const sensorsDefualtValues = {
  sot: {
    hum: 0,
    temp: 0,
  },
  arena: {
    hum: 0,
    temp: 0,
  },
  outside: {
    hum: 0,
    temp: 0,
  },
};

const strokeColor = {
  "0%": "#c0392b",
  "50%": "#f1c40f",
  "100%": "#1abc9c",
};

const TEMPERATURE_OFFSET = 30;

const Dashboard = () => {
  const [sensors, setSensors] = useState<SensorsData["sensors"] | null>(null);

  useEffect(() => {
    videoService.getSensorsData().then((data) => {
      console.log("data", data);
      setSensors(data.sensors);
    });
  }, []);

  console.log("sensors", sensors);

  const sensorsValues = sensors ? sensors : sensorsDefualtValues;

  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col>
          <Card title="В сотах">
            <Space>
              <Progress type="dashboard" percent={sensorsValues.sot.hum} />
              <Progress
                type="dashboard"
                strokeColor={strokeColor}
                percent={sensorsValues.sot.temp + TEMPERATURE_OFFSET}
                format={() => `${sensorsValues.sot.temp} C`}
              />
            </Space>
          </Card>
        </Col>
        <Col>
          <Card title="В арені">
            <Space>
              <Progress type="dashboard" percent={sensorsValues.arena.hum} />
              <Progress
                type="dashboard"
                strokeColor={strokeColor}
                percent={sensorsValues.arena.temp + TEMPERATURE_OFFSET}
                format={() => `${sensorsValues.arena.temp} C`}
              />
            </Space>
          </Card>
        </Col>
        <Col>
          <Card title="В кімнаті">
            <Space>
              <Progress type="dashboard" percent={sensorsValues.outside.hum} />
              <Progress
                type="dashboard"
                strokeColor={strokeColor}
                percent={sensorsValues.outside.temp + TEMPERATURE_OFFSET}
                format={() => `${sensorsValues.outside.temp} C`}
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
