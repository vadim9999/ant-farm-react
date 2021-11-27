import { API_URL } from "api/api";
import axios from "axios";
import {
  GetStreamSettings,
  RebootRPI,
  SaveStreamSettings,
  SetSettingsFeeder,
  ShutdownRPI,
} from "./typesArgs";
import { GetStreamSettingsResponse } from "./typesResponse";

class SettingsService {
  private API: string | null = null;

  constructor(api_url: string) {
    this.API = api_url;
  }

  shutDownRPI = ({ userId }: ShutdownRPI) =>
    axios.get(`${this.API}/shutdown_pi?id=${userId}`).then((res) => res.data);

  getSettingsFeeder = () =>
    axios
      .get<string>(`${this.API}/get_settings_feeder`)
      .then((res) => res.data);

  rebootRPI = ({ userId }: RebootRPI) =>
    axios.get(`${this.API}/reboot_pi?id=${userId}`).then((res) => res.data);

  setSettingsFeeder = ({ interval, userId }: SetSettingsFeeder) =>
    axios
      .post(`${this.API}/set_settings_feeder?id=${userId}`, interval)
      .then((res) => res.data);

  saveStreamSettings = ({ userId, youtube, key }: SaveStreamSettings) =>
    axios
      .post(
        `${API_URL}/set_stream_settings?id=${userId}`,
        // TODO check it maybe it can be removed
        JSON.stringify({ youtube, key })
      )
      .then((res) => res.data);

  getStreamSettings = ({ userId }: GetStreamSettings) =>
    axios
      .get<GetStreamSettingsResponse>(`${API_URL}/stream_settings?id=${userId}`)
      .then((res) => res.data);
}

export default new SettingsService(API_URL);
