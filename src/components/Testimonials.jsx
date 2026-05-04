import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode } from "swiper/modules";
import Title from "./Title";

const Testimonials = () => {
  const reviews = [
    {
      name: "User 1",
      profession: "Student",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptas quam dolorum mollitia aut culpa voluptatum! Dolorem saepe sit illum.",
    },
    {
      name: "User 2",
      profession: "Student",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptas quam dolorum mollitia aut culpa voluptatum! Dolorem saepe sit illum.",
    },
    {
      name: "User 3",
      profession: "Student",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptas quam dolorum mollitia aut culpa voluptatum! Dolorem saepe sit illum.",
    },
    {
      name: "User 4",
      profession: "Student",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptas quam dolorum mollitia aut culpa voluptatum! Dolorem saepe sit illum.",
    },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-[5%]">
      <div className="container mx-auto">
        <Title text="Honest " highlight="Review" />

        <Swiper
          className="mt-8"
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

          onSwiper={(swiper) => {
            swiper.el.addEventListener("mouseenter", () => {
              // 🔥 current position freeze
              // swiper.setTranslate(swiper.getTranslate());

              // 🔥 stop autoplay
              swiper.autoplay.stop();

              // 🔥 instantly stop animation
              swiper.wrapperEl.style.transitionDuration = "0ms";
            });

            swiper.el.addEventListener("mouseleave", () => {
              // 🔥 smooth resume (same speed as before)
              swiper.wrapperEl.style.transitionDuration = "4000ms";

              // 🔥 slight delay remove lag feeling
              setTimeout(() => {
                swiper.autoplay.start();
              }, 50); // small delay = smoother feel
            });
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="swiper-slide content-center">
              <div className="bg-[#06142E] border border-blue-500 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:border-blue-400">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://i.pravatar.cc/50"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm opacity-70">{review.profession}</p>
                  </div>
                </div>

                <p className="text-sm opacity-80">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
