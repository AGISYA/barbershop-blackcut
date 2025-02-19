"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const trendingStyles = [
  { title: "Slick Back", id: 1, image: "/images/slick back.png" },
  { title: "Classic Quiff", id: 2, image: "/images/classic quiff.png" },
  {
    title: "Buzz Cut",
    id: 3,
    image: "/images/Buzz Cut Hairstyles.png",
  },
  { title: "Mullet", id: 4, image: "/images/mulet.png" },
  { title: "Two Block", id: 5, image: "/images/two block.png" },
  { title: "Wolf Cut", id: 6, image: "/images/wolf cut.png" },
];

export default function TrendingCarousel() {
  return (
    <section id="section-trending" className="py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#aa7656]">
          Trending Styles
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="text-[#aa7656]"
        >
          {trendingStyles.map((style) => (
            <SwiperSlide key={style.id}>
              <div className=" text-[#aa7656] rounded-lg shadow-lg overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{style.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
