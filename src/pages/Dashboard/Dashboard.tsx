import React, { useContext, useEffect, useState } from "react";
import { Card, Col, notification, Progress, Row, Space } from "antd";
import { SensorsData } from "api/settings-service/typesResponse";
import sensorsService from "api/sensors-service/sensors.service";
import { GlobalContext } from "context/GlobalContextComponent";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("translation", { keyPrefix: "dashboard" });
  const [sensors, setSensors] = useState<SensorsData | null>(null);

  useEffect(() => {
    const getSensorsData = () => {
      return sensorsService.getSensorsData().then((data) => {
        setSensors(data);
      });
    };

    const interval = setInterval(() => {
      getSensorsData().catch(() => {
        notification.error({
          message: t("notifications.errorGettingSensorsData"),
        });
        clearInterval(interval);
      });
    }, 5000);

    getSensorsData();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sensorsValues = sensors ? sensors.sensors : sensorsDefualtValues;

  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col>
          <Card title={t("inSots")}>
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
          <Card title={t("inArena")}>
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
          <Card title={t("inRoom")}>
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
        <Col>
          <Card title={t("waterLevel")}>
            <Progress percent={sensors?.waterLevel} steps={5} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
