import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import GlobalContext from "context/GlobalContextComponent";
import CreatePicture from "./CreatePicture/CreatePicture";
import StreamingControls from "./StreamingControls/StreamingControls";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoRecording from "./VideoRecording/VideoRecording";
import { Card, Col, Row } from "antd";

const Home = () => {
  return (
    <Row>
      <Col>
        <VideoPlayer />
      </Col>
      <Col style={{ marginLeft: 15 }}>
        <Card>
          <StreamingControls />
          <VideoRecording />
          <CreatePicture />
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
