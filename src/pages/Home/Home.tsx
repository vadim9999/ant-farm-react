import React from "react";
import CreatePicture from "./CreatePicture/CreatePicture";
import StreamingControls from "./StreamingControls/StreamingControls";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoRecording from "./VideoRecording/VideoRecording";

const Home = () => {
  return (
    <div>
      <VideoPlayer />
      <StreamingControls />
      <VideoRecording />
      <CreatePicture />
    </div>
  );
};

export default Home;
