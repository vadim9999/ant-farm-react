import axios from "axios";

// const API_URL = document.location.protocol + "//" + document.location.host;
const API_URL = "http://raspberrypi.local";
interface PostStartPreview {
  userId: string;
}

export const postStartPreview = ({ userId }: PostStartPreview) =>
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

axios.post(`${API_URL}/start?id=${userId}`, "854x480", {
  headers: {
    // Accept: "*/*",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
    // mode: "no-cors",
  },
});
