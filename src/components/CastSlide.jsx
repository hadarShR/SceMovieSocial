import React, { useState, useEffect, useMemo } from "react";
import { getCast } from "../api/axiosClient";
import apiConfig from "../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import NoImage from "../assets/No-Image-Placeholder.svg.png";

const CastSlide = (props) => {
  const [casts, setCasts] = useState([]);

  const memoizedGetCast = useMemo(() => getCast, []);

  useEffect(() => {
    const getCredits = async () => {
      const res = await memoizedGetCast(props.type, props.id);
      setCasts(res);
    };
    getCredits();
  }, [props, memoizedGetCast]);

  return (
    <div className="casts">
      <Swiper
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        grabCursor={true}
        style={{ width: "750px" }}
      >
        {casts?.map((item, i) => (
          <SwiperSlide key={i}>
            <div key={i} className="casts__item">
              <Link to="/personDetails" state={{ item: item.id }}>
                {item.profile_path ? (
                  <div
                    className="casts__item__img"
                    style={{
                      backgroundImage: `url(${apiConfig.w500Image(
                        item.profile_path
                      )})`,
                    }}
                  ></div>
                ) : (
                  <div
                    className="casts__item__img"
                    style={{
                      backgroundImage: `url(${NoImage})`,
                    }}
                  ></div>
                )}
              </Link>

              <p className="casts__item__name">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSlide;
