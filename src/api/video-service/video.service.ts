import { API_URL } from "api/api";
import axios from "axios";
import {
  DeleteMediaFile,
  DownloadMediaFile,
  StartPreview,
  StartRecording,
  StartStream,
  StopPreview,
  StopRecording,
  StopStream,
  TakePicture,
  WaitStartPreview,
} from "./typesArgs";

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

  stopPreview = ({ userId }: StopPreview) =>
    axios.get(`${API_URL}/stop?id=${userId}`);

  startRecording = ({ userId, resolution, filename }: StartRecording) =>
    axios.post(
      `${API_URL}/start_record?id=${userId}`,
      JSON.stringify({ resolution, filename })
      // { timeout: 10000 }
    );

  stopRecording = ({ userId }: StopRecording) =>
    axios.get(`${API_URL}/stop_record?id=${userId}`);

  takePicture = ({ resolution, filename, userId }: TakePicture) =>
    axios.post(
      `${API_URL}/capture_image?id=${userId}`,
      JSON.stringify({ resolution, filename })
    );
}

const videoService = new VideoService(API_URL);

export default videoService;
