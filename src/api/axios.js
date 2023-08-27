import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "87a758741463b9711dd2e516b5221da9",
    language: "ko-KR",
  },
});
export default instance;
