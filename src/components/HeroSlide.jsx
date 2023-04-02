import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import apiConfig from "../api/apiConfig";

import "swiper/swiper-bundle.css";
import "../scss/hero-slide.scss";

import { getMediaList } from "../api/axiosClient";
import GlobalLoading from "./GlobalLoading";

const HeroSlide = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await getMediaList("movie", "popular");
      setPopularMovies(response);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <GlobalLoading />
      ) : (
        <div className="hero-slide">
          <Swiper
            modules={[Keyboard, Pagination, Navigation, Autoplay, A11y]}
            Pagination={{ clickable: true }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            keyboard={{
              enabled: true,
            }}
            style={{
              "--swiper-pagination-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
            //autoplay={{ delay: 3000 }}
          >
            {popularMovies &&
              popularMovies.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <HeroSlideItem
                      item={item}
                      className={`${isActive ? "active" : ""}`}
                    />
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button>
              <Link
                className="property-btn"
                to="/detail"
                state={{ item: item, MediaType: "movie" }}
              >
                Read More
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
