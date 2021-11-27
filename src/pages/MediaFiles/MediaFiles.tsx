import React, { useEffect, useState } from "react";
import videoService from "api/video-service/video.service";
import TableMediaFiles from "./TableMediaFiles/TableMediaFiles";

const MediaFiles = () => {
  const [files, setFiles] = useState<string[]>([]);

  const getFiles = () => {
    videoService.getMediaFiles().then((data) => {
      setFiles(data);
      console.log("data", data);
    });
  };

  useEffect(() => {
    getFiles();
  }, []);

  return <TableMediaFiles getFiles={getFiles} mediaFiles={files} />;
};

export default MediaFiles;
