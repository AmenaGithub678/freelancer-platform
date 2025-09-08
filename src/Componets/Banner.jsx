import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image:
      "https://i.ibb.co.com/4nhxG0hm/kitchen-student-dormitory-group-interracial-students-engaged-education.jpg",
    title: "Turn Your Ideas Into Action — Together",
    text: "Whether you're looking for help or looking for work, Freelance Fusion makes it fast, fair, and flexible.",
  },
  {
    image: "https://i.ibb.co.com/0ycvx2Mr/banner2.jpg",
    title: "Don’t Just Plan It — Make It Happen with Freelancers",
    text: "Need a job done? Hire fast, work smart, and get results from real people with real skills.",
  },
  {
    image: "https://i.ibb.co.com/wNTcn6yC/laptop-2838921-1280.jpg",
    title: "Big or Small — Make It Happen with Freelancers Who Care",
    text: "Turn small tasks into real results. Post, connect, and get things done with trusted talent at your fingertips.",
  },
];

const Banner = () => {
  return (
    <div className="w-full h-[700px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Slide Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-full shadow-lg hover:shadow-2xl rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 bg-black/40">
                <motion.h1
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-4 text-3xl lg:text-5xl font-bold max-w-3xl text-[#FFBDA1] drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-6 text-base lg:text-lg text-[#FF9CE9] drop-shadow-md"
                >
                  {slide.text}
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
