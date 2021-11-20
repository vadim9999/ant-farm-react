import axios from "axios";
import { VideoResolution } from "types";
import {
  DownloadMediaFile,
  GetStreamSettings,
  SaveStreamSettings,
  StartPreview,
  StartRecording,
  StartStream,
  StopPreview,
  StopRecording,
  StopStream,
  TakePicture,
  WaitStartPreview,
  DeleteMediaFile,
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
  private API: string | null = null;

  constructor(api_url: string) {
    this.API = api_url;
  }

  startPreview = ({ userId, resolution }: StartPreview) =>
    axios.post(`${this.API}/start?id=${userId}`, resolution);

  waitStartPreview = ({ userId }: WaitStartPreview) =>
    axios.get(`${this.API}/wait_start_preview?id=${userId}`);

  startStream = ({ userId, resolution }: StartStream) =>
    axios.post(`${this.API}/start_stream?id=${userId}`, resolution);

  // TODO add getting res.data here
  stopStream = ({ userId }: StopStream) =>
    axios.get(`${this.API}/stop_stream?id=${userId}`);

  isStreaming = () => axios.get(`${this.API}/is_streaming`);

  getMediaFiles = () =>
    axios.get<string>(`${this.API}/media`).then<string[]>((res) => {
      return res.data.length ? JSON.parse(res.data.replaceAll("'", '"')) : [];
    });

  downloadMediaFile = ({ fileName }: DownloadMediaFile) =>
    axios
      .get<Blob>(`${this.API}/download/${fileName}`, { responseType: "blob" })
      .then((res) => res.data);

  deleteMediaFile = ({ fileName }: DeleteMediaFile) =>
    axios.get(`${this.API}/delete/${fileName}`).then((res) => res.data);
}

// TODO Refactor this
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
      // TODO check it maybe it can be removed
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
