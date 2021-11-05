import axios from "axios";
import { VideoResolution } from "types";

// const API_URL = document.location.protocol + "//" + document.location.host;
export const API_URL = "http://raspberrypi.local";
interface StartPreview {
  userId: string;
  resolution: VideoResolution;
}

interface StopPreview {
  userId: string;
}

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
