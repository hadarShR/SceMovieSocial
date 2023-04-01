import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfigs from "../api/apiConfig";
import { A11y, Navigation, Pagination } from "swiper";

const BackdropSlide = ({ backdrops }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, A11y]}
      Pagination={{ clickable: true }}
      navigation={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1.25}
      centeredSlides
      loop
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "white",
        "--swiper-pagination-bullet-size": "10px",
      }}
    >
      {[...backdrops].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              paddingTop: "60%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${tmdbConfigs.originalImage(
                item.file_path
              )})`,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BackdropSlide;
