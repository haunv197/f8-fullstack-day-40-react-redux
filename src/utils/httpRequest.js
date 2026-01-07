import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

httpRequest.interceptors.response.use((response) => {
  return response.data;
});

export default httpRequest;
