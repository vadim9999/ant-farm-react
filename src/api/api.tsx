import axios from "axios";

// export const API_URL = `${document.location.protocol}"//"${document.location.hostname}:8080`;
export const API_URL = "http://raspberrypi.local:8080";

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

export const getUserId = () => axios.get(`${API_URL}/get_user_id`);
