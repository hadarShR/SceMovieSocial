import React from "react";

import "../scss/movie-card.scss";

import { Link } from "react-router-dom";

import Button from "./Button";
import apiConfig from "../api/apiConfig";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import photoComingSoon from "../assets/photo-coming-soon.jpg";

const MovieCard = (props) => {
  const item = props.item;
  const type = props.MediaType;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <>
      <div
        className="movie-card"
        style={{
          backgroundImage:
            item.poster_path || item.backdrop_path
              ? `url(${bg})`
              : `url(${photoComingSoon})`,
        }}
      >
        <Link to="/detail" state={{ item: item, MediaType: type }}>
          <Button>
            <div style={{ scale: "1.4", paddingTop: "3px" }}>
              <PlayArrowIcon />
            </div>
          </Button>
        </Link>
      </div>
      <h3>{item.title || item.name}</h3>
    </>
  );
};

export default MovieCard;
