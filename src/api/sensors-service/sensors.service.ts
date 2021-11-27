import { API_URL } from "api/api";
import axios from "axios";
import { FeedNow } from "./typesArgs";
import { SensorsData } from "./typesResponse";

class SensorsService {
  private API: string | null = null;

  constructor(api_url: string) {
    this.API = api_url;
  }

  getSensorsData = () =>
    axios.get<SensorsData>(`${this.API}/sensors`).then((res) => res.data);

  feedNow = ({ userId }: FeedNow) =>
    axios.get(`${this.API}/feed?id=${userId}`).then((res) => res.data);
}

export default new SensorsService(API_URL);
