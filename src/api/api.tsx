import axios from "axios";
import { VideoResolution } from "types";
import {
  GetStreamSettings,
  SaveStreamSettings,
  StartPreview,
  StartRecording,
  StopPreview,
  StopRecording,
  TakePicture,
} from "./types";
import { GetStreamSettingsResponse } from "./typesApiResponse";

// export const API_URL = `${document.location.protocol}"//"${document.location.hostname}:8080`;
export const API_URL = "http://raspberrypi.local:8080";

// {
//   headers: {
//     // Accept: "*/*",
//     // "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//     // mode: "no-cors",
//   },
// }

// TODO refactor this code
class VideoService {
  API: string | null = null;

  constructor(api_url: string) {
    this.API = api_url;
  }

  startPreview = ({ userId, resolution }: StartPreview) =>
    axios.post(`${API_URL}/start?id=${userId}`, resolution);
}

export const stopPreview = ({ userId }: StopPreview) =>
  axios.get(`${API_URL}/stop?id=${userId}`);

export const startRecording = ({
  userId,
  resolution,
  filename,
}: StartRecording) =>
  axios.post(
    `${API_URL}/start_record?id=${userId}`,
    JSON.stringify({ resolution, filename })
    // { timeout: 10000 }
  );

export const stopRecording = ({ userId }: StopRecording) =>
  axios.get(`${API_URL}/stop_record?id=${userId}`);

export const takePicture = ({ resolution, filename, userId }: TakePicture) =>
  axios.post(
    `${API_URL}/capture_image?id=${userId}`,
    JSON.stringify({ resolution, filename })
  );

export const getUserId = () => axios.get(`${API_URL}/get_user_id`);

export const getStreamSettings = ({ userId }: GetStreamSettings) =>
  axios
    .get<GetStreamSettingsResponse>(`${API_URL}/stream_settings?id=${userId}`)
    .then((res) => res.data);

export const saveStreamSettings = ({
  userId,
  youtube,
  key,
}: SaveStreamSettings) =>
  axios
    .post(
      `${API_URL}/set_stream_settings?id=${userId}`,
      JSON.stringify({ youtube, key })
    )
    .then((res) => res.data);

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

const videoService = new VideoService(API_URL);

export { videoService };
