import React, { useContext, useState } from "react";
import CreatePicture from "./CreatePicture/CreatePicture";
import StreamingControls from "./StreamingControls/StreamingControls";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoRecording from "./VideoRecording/VideoRecording";

const Home = () => {
  // const context = useContext({d});
  // TODO add useContext

  const [isStartedRecording, setIsStartedRecording] = useState(false);
  return (
    <div>
      <VideoPlayer isStartedRecording={isStartedRecording} />
      <StreamingControls />
      <VideoRecording onStartRecording={() => setIsStartedRecording(true)} />
      <CreatePicture />
    </div>
  );
};

export default Home;
