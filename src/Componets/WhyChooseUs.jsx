import React from "react";
import { FaUserShield, FaBolt, FaTasks, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] ">
      <h2 className="text-3xl font-bold text-center text-[#AD56C4]  mb-12">
         Why Choose Us
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {/* Left side cards */}
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          
          {/* Card 1 */}
          <div className="rounded-lg border p-5 transition duration-300 hover:bg-indigo-50 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaUserShield className="text-indigo-600 text-xl mr-2" />
              <p className="text-lg  text-[#AD56C4]  font-semibold sm:text-base">
                Secure & Reliable
              </p>
            </div>
            <p className="text-sm text-gray-700">
              We protect your data and ensure safe transactions between clients
              and freelancers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border p-5 transition duration-300 hover:bg-teal-50 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaBolt className="text-teal-600 text-xl mr-2" />
              <p className="text-lg  text-[#AD56C4]  font-semibold sm:text-base">
                Fast & Easy to Use
              </p>
            </div>
            <p className="text-sm text-gray-700">
              Post tasks in minutes and get quick bids from skilled freelancers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border p-5 transition duration-300 hover:bg-teal-50 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaTasks className="text-rose-600 text-xl mr-2" />
              <p className="text-lg  text-[#AD56C4]  font-semibold sm:text-base">
                Wide Range of Tasks
              </p>
            </div>
            <p className="text-sm text-gray-700">
              From design to development, find freelancers for every kind of
              task.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg border p-5 transition duration-300 hover:bg-indigo-50 hover:shadow-lg transform hover:-translate-y-1">
            <div className="flex items-center mb-3">
              <FaHandshake className="text-pink-600 text-xl mr-2" />
              <p className="text-lg  text-[#AD56C4]  font-semibold sm:text-base">
                Trusted Community
              </p>
            </div>
            <p className="text-sm text-gray-700">
              Connect with verified freelancers & clients who value trust and
              collaboration.
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative md:col-span-2 lg:col-span-2">
          <img
            className="inset-0 object-cover object-bottom w-full h-56 rounded-lg shadow-lg lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Teamwork"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
