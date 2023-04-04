import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import apiConfig from "../api/apiConfig";
import { getDetails, getImages } from "../api/axiosClient";
import "../scss/detail.scss";
import CastSlide from "../components/CastSlide";
import VideoSlide from "../components/VideoSlide";
import MovieSlide from "../components/MovieSlide";
import BackdropSlide from "../components/BackdropSlide";
import PosterSlide from "../components/PosterSlide";
import GlobalLoading from "../components/GlobalLoading";

const Detail = () => {
  const location = useLocation();
  const item = location.state.item;
  const MediaType = location.state.MediaType;
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [images, setImages] = useState(null);
  const [runtime, setRuntime] = useState("");
  const [release_date, setReleaseDate] = useState("");

  useEffect(() => {
    const getDetail = async () => {
      window.scrollTo(0, 0);
      setLoading(true);
      const DetailsResponse = await getDetails(MediaType, item.id);
      const ImagesResponse = await getImages(MediaType, item.id);

      setDetail(DetailsResponse);
      setImages(ImagesResponse);

      if (MediaType === "movie") {
        setRuntime(DetailsResponse.runtime);
        setReleaseDate(DetailsResponse.release_date);
      } else {
        setRuntime(DetailsResponse.seasons.length);
        setReleaseDate(DetailsResponse.first_air_date);
      }

      setLoading(false);
    };
    getDetail();
  }, [MediaType, item]);

  return (
    <>
      {loading ? (
        <GlobalLoading />
      ) : (
        <>
          {item && (
            <>
              <div
                className="banner"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.backdrop_path || item.poster_path
                  )})`,
                }}
              ></div>
              <div className="mb-3 movie-content container">
                <div className="movie-content__poster">
                  <div
                    className="movie-content__poster__img"
                    style={{
                      backgroundImage: `url(${apiConfig.originalImage(
                        item.poster_path || item.backdrop_path
                      )})`,
                    }}
                  ></div>
                </div>
                <div className="movie-content__info">
                  <h1 className="title">{item.title || item.name}</h1>
                  <div className="genres">
                    {detail &&
                      detail.genres.slice(0, 5).map((genre, i) => (
                        <span key={i} className="genres__item">
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <p className="overview">{item.overview}</p>
                  <div className="time" style={{ display: "flex" }}>
                    <p style={{}}>Release date : {release_date}</p>
                    {MediaType === "movie" ? (
                      <p style={{ marginLeft: "3rem" }}>
                        Runtime : {runtime}min
                      </p>
                    ) : (
                      <p style={{ marginLeft: "3rem" }}>Seasons : {runtime}</p>
                    )}
                  </div>

                  <div className="cast">
                    <div className="section__header">
                      <div
                        style={{
                          textDecorationLine: "underline",
                          textDecorationColor: "#FFBA08",
                          textDecorationThickness: "4px",
                          textUnderlineOffset: "0.25rem",
                          paddingBottom: "1rem",
                        }}
                      >
                        <h2>CAST</h2>
                      </div>
                    </div>
                    <CastSlide type={MediaType} id={item.id} />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="section mb-3">
                  <div
                    style={{
                      textDecorationLine: "underline",
                      textDecorationColor: "#FFBA08",
                      textDecorationThickness: "4px",
                      paddingLeft: "2.5rem",
                      textUnderlineOffset: "0.25rem",
                    }}
                  >
                    <h2>VIDEOS</h2>
                  </div>
                  <VideoSlide type={MediaType} id={item.id} />
                </div>

                {/* media backdrop */}
                <div
                  style={{
                    textDecorationLine: "underline",
                    textDecorationColor: "#FFBA08",
                    textDecorationThickness: "4px",
                    paddingLeft: "2.5rem",
                    textUnderlineOffset: "0.25rem",
                  }}
                >
                  <h2>BACKDROPS</h2>
                </div>
                {images && images.backdrops.length > 0 && (
                  <div
                    header="backdrops"
                    style={{
                      paddingTop: "1.5rem",
                      paddingBottom: "2rem",
                      paddingLeft: "3rem",
                    }}
                  >
                    <BackdropSlide backdrops={images.backdrops} />
                  </div>
                )}
                {/* media backdrop */}

                {/* media posters */}
                <div
                  style={{
                    textDecorationLine: "underline",
                    textDecorationColor: "#FFBA08",
                    textDecorationThickness: "4px",
                    paddingLeft: "2.5rem",
                    textUnderlineOffset: "0.25rem",
                  }}
                >
                  <h2>POSTERS</h2>
                </div>
                {images && images.posters.length > 0 && (
                  <div
                    header="posters"
                    style={{
                      paddingTop: "1.5rem",
                      paddingBottom: "2rem",
                      paddingLeft: "3rem",
                    }}
                  >
                    <PosterSlide posters={images.posters} />
                  </div>
                )}
                {/* media posters */}

                <div className="section mb-3">
                  <div
                    className="section__header mb-2"
                    style={{
                      textDecorationLine: "underline",
                      textDecorationColor: "#FFBA08",
                      textDecorationThickness: "4px",
                      paddingLeft: "0.5rem",
                      textUnderlineOffset: "0.25rem",
                    }}
                  >
                    <h2>SIMILAR</h2>
                  </div>
                  <MovieSlide type={MediaType} id={item.id} />
                </div>
              </div>
            </>
          )}{" "}
        </>
      )}
    </>
  );
};

export default Detail;
