import React, { useEffect } from "react";
import HeroSlide from "../components/HeroSlide";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/Button";
import HomeMediaSlide from "../components/HomeMediaSlide";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Upcoming Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <HomeMediaSlide type={"movie"} MediaName={"upcoming"} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <HomeMediaSlide type={"movie"} MediaName={"top_rated"} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <HomeMediaSlide type={"tv"} MediaName={"popular"} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <HomeMediaSlide type={"tv"} MediaName={"top_rated"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
