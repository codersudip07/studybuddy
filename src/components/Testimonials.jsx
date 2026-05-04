import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Title from "./Title";

const Testimonials = () => {
  return (
    <>
      <section className="w-full md:h-screen py-10 px-4 md:px-[5%]">
        <figure className="relative container mx-auto">
          <Title text="Honest " highlight="Review" />
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1, // mobile
              },
              640: {
                slidesPerView: 2, // small tablet
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
            className="mySwiper w-full mt-10"
          >
            <SwiperSlide>
              <div className="bg-[#06142E] border border-blue-500 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/50"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Sk Babanchod Ahmed</h3>
                    <p className="text-sm opacity-70">Student</p>
                  </div>
                </div>

                <p className="text-sm opacity-80">
                  It is a long established fact that a reader will be
                  distracted...
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#06142E] border border-blue-500 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/50"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Sk Babanchod Ahmed</h3>
                    <p className="text-sm opacity-70">Student</p>
                  </div>
                </div>

                <p className="text-sm opacity-80">
                  It is a long established fact that a reader will be
                  distracted...
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#06142E] border border-blue-500 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/50"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Sk Babanchod Ahmed</h3>
                    <p className="text-sm opacity-70">Student</p>
                  </div>
                </div>

                <p className="text-sm opacity-80">
                  It is a long established fact that a reader will be
                  distracted...
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </figure>
      </section>
    </>
  );
};

export default Testimonials;
