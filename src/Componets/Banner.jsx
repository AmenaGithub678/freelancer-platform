import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
    {
      image: "https://i.ibb.co.com/4nhxG0hm/kitchen-student-dormitory-group-interracial-students-engaged-education.jpg",
      title: "Turn Your Ideas Into Action-Together",
      text: "Whether you're looking for help or looking for work, Freelance Fusion makes it fast, fair, and flexible.",
    },
    {
      image: "https://i.ibb.co.com/0ycvx2Mr/banner2.jpg",
      title: 'Don’t Just Plan It — Make It Happen with Freelancers',
      text: 'Need a job done? Hire fast, work smart, and get results from real people with real skills',
    },
    {
      image: "https://i.ibb.co.com/wNTcn6yC/laptop-2838921-1280.jpg",
      title: 'Big or Small — Make It Happen with Freelancers Who Care',
      text: 'Turn small tasks into real results. Post, connect, and get things done with trusted talent at your fingertips.',
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