import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FeedbackCard from "./FeedbackCard";

const UserFeedback = () => {
  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="bg-[#FFF7E2] py-20 px-6">
      <h2 className="text-center md:text-4xl text-2xl font-extrabold text-[#3A643B] mb-6">
        <span className="md:border-b-4 border-[#C3D0C4]">
          Stories From Our Valued Customers!
        </span>
      </h2>
      <div className="container mx-auto">
        <Swiper
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard
                review={review}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UserFeedback;
