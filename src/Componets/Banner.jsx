import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.PNG';

const slides = [
    {
      image: banner1,
      title: "Turn Your Ideas Into Action-Together",
      text: "Whether you're looking for help or looking for work, Freelance Fusion makes it fast, fair, and flexible.",
    },
    {
      image: banner2,
      title: 'Don’t Just Plan It — Make It Happen with Freelancers',
      text: 'Need a job done? Hire fast, work smart, and get results from real people with real skills',
    },
    {
      image: banner3,
      title: 'Big or Small — Make It Happen with Freelancers Who Care',
      text: 'Turn small tasks into real results. Post, connect, and get things done with trusted talent at your fingertips.',
    },
  ];

const Banner = () => {
    return (
         <div className="w-full h-[500px] relative">
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
            <div className="relative w-full h-full">
   <img
    src={slide.image}
    alt={`Banner ${index + 1}`}
    className="w-full h-full   bg-contain " 
              />
              {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-start p-10  ">
    <h1 className="mb-4 text-4xl font-bold max-w-3xl text-[#FFBDA1]">{slide.title}</h1>
    <p className="mb-6 max-w-2xl text-lg text-[#FF9CE9]">{slide.text}</p>
       {/* <Link to="/auth/login">
        <Button onClick={handleLogin} label="Login" />
       </Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default Banner;