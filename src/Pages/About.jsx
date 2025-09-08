import React from 'react';
import WhyChooseUs from '../Componets/WhyChooseUs';
import { Link } from 'react-router';

const About = () => {
    return (
  <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF]">
  <div className="grid gap-10 lg:grid-cols-2 items-center">
    {/* Left Content */}
    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
      <div className="mb-6">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-snug">
          Empower Your <span className="text-[#AD56C4]">Work</span>
          <br className="hidden md:block" />
          Post Tasks & Connect with <span className="text-[#f000b8]">Top Talent</span>
        </h2>
        <p className="text-base text-gray-600 md:text-lg">
          Our platform makes it easy to post tasks, hire professionals, and
          get work done faster. Whether you need design, development, writing,
          or marketing, we bring the right people to your project.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 bg-[#AD56C4] rounded-lg shadow-md hover:bg-[#f000b8]"
        >
          Get Started
        </Link>
        <Link
          to="/auth/login"
          className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-[#AD56C4] transition duration-200 border border-[#AD56C4] rounded-lg hover:bg-[#AD56C4]/10"
        >
          Learn More
        </Link>
      </div>
    </div>

    {/* Right Content (Images) */}
    <div className="flex items-center justify-center -mx-4 lg:pl-8">
      <div className="flex flex-col items-end px-3 space-y-4">
        <img
          className="object-cover rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Team discussion"
        />
        <img
          className="object-cover rounded-xl shadow-lg w-20 h-20 sm:h-32 xl:h-40 sm:w-32 xl:w-40"
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Working together"
        />
      </div>
      <div className="px-3">
        <img
          className="object-cover rounded-xl shadow-lg w-40 h-40 sm:h-64 xl:h-80 sm:w-64 xl:w-80"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Freelancers working"
        />
      </div>
    </div>
  </div>
</div>


    <WhyChooseUs></WhyChooseUs>
  </div>

    
    );
};

export default About;