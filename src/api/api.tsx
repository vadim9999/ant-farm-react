import axios from "axios";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://raspberrypi.local:8080"
    : `${document.location.protocol}"//"${document.location.hostname}:8080`;

export const getUserId = () => axios.get(`${API_URL}/get_user_id`);
