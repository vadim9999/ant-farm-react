import axios from "axios";
import { VideoResolution } from "types";
import { StartPreview, StartRecording, StopPreview, StopRecording } from "./types";

// const API_URL = document.location.protocol + "//" + document.location.host;
export const API_URL = "http://raspberrypi.local";

export const startPreview = ({ userId, resolution }: StartPreview) =>
  axios.post(`${API_URL}/start?id=${userId}`, resolution, {
    headers: {
      // Accept: "*/*",
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
      // mode: "no-cors",
    },
  });

export const stopPreview = ({ userId }: StopPreview) =>
  axios.get(`${API_URL}/stop?id=${userId}`);

export const startRecording = ({
  userId,
  resolution,
  filename,
}: StartRecording) =>
  axios.post(
    `${API_URL}/start_record?id=${userId}`,
    JSON.stringify({ resolution, filename }),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

export const stopRecording = ({ userId }: StopRecording) =>
  axios.get(`${API_URL}/stop_record?id=${userId}`);
// axios({
//   headers: {
//     Accept: "*/*",
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain;charset=UTF-8",
//     mode: "no-cors",
//   },
//   url: `${API_URL}/start?id=${userId}`,
//   method: "POST",
//   data: "854x480",
// });
