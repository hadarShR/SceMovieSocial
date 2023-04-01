import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import { getSimilar } from "../api/axiosClient";
import apiConfig from "../api/apiConfig";
import Button from "./Button";
import MovieCard from "./MovieCard";

import "../scss/movie-slide.scss";

const MovieSlide = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await getSimilar(props.type, props.id);
      setItems(res);
    };
    getMovies();
  }, [props.id]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={6}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} MediaType={props.type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlide;
