import Axios from "axios";

export const locationInstance = Axios.create({
  baseURL: "http://ip-api.com/json/",
  timeout: 2000,
});
export const weatherInstance = Axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
  timeout: 2000,
});
