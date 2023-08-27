import axiosInstance from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //현재 상영중인 영화 정보를 가져오기
    const response = await axiosInstance.get(requests.fetchNowPlaying);
    //여러 영화중 영화 하나의 ID 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;
    //특정 영화의 더 상세정보 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axiosInstance.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };
  return <div>Banner</div>;
}

export default Banner;
