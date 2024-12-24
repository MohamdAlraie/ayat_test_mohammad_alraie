import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import TitleSeeAll from "../../components/Titles/TitleSeeAll";
import TripCard from "../../components/Cards/TripCard";

const HomePage = () => {
  return (
    <div className="box min-h-full overflow-y-auto">
      <h1 className="font-bold text-xl first-letter:uppercase mb-4">
        32 Trips
      </h1>
      <div className="border border-dashed my-4" />
      <TitleSeeAll title="To Aleppo" rout="/home/Aleppo" />
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.7,
          },
        }}
        className="my-4"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <TripCard rout={`/home/trip_details/${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <TitleSeeAll title="To Homs" rout="/home/Homs" />
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.7,
          },
        }}
        className="my-4"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <TripCard rout={`/home/trip_details/${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <TitleSeeAll title="To Damascus" rout="/home/Damascus" />
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.7,
          },
        }}
        className="my-4"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <TripCard rout={`/home/trip_details/${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;
