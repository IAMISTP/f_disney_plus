import axios from "../api/axios";
import React, { useCallback, useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";
import { styled } from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
    console.log(movie);
  };
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        //install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} //loop 기능을 사용할것인 유무
        navigation //arrow 버튼 사용유무
        pagination={{ clickable: true }} //페이지 버튼보이게 할지
      >
        <Content id={id}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Wrap>
                <img
                  key={movie.id}
                  className="row__poster"
                  src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>
      {modalOpen && (
        <MovieModal setModalOpen={setModalOpen} {...movieSelected} />
      )}
    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div``;
const Wrap = styled.div``;
