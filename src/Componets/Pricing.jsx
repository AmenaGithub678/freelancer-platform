import React from 'react';
import { motion } from "framer-motion";
const Pricing = () => {
    return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Pricing
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Transparent</span>
          </span>{" "}
          pricing. Pay as you grow.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Choose a plan that fits your needs and scale seamlessly with your growth.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

        {/* Free Plan */}
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col justify-between p-8 bg-white border rounded shadow-sm sm:items-center hover:shadow-xl"
        >
          <div className="text-center">
            <div className="text-lg font-semibold">Start</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">Free</div>
            </div>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>10 tasks per month</p>
              <p>Basic support</p>
              <p>Community access</p>
            </div>
          </div>
          <button
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200  rounded shadow-md btn btn-sm btn-secondary"
          >
            Start for free
          </button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          whileHover={{ scale: 1.08, y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex flex-col justify-between p-8 bg-white border rounded shadow-sm sm:items-center hover:shadow-xl border-deep-purple-accent-400"
        >
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-[#AD56C4]">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Pro</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$38</div>
              <div className="text-gray-700">/mo</div>
            </div>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Unlimited tasks</p>
              <p>Priority support</p>
              <p>Team collaboration</p>
            </div>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-blue
            bg-[#AD56C4] rounded shadow-md hover:bg-deep-purple-accent-700"
          >
            Buy Pro
          </a>
        </motion.div>

        {/* Business Plan */}
        <motion.div
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col justify-between p-8 bg-white border rounded shadow-sm sm:items-center hover:shadow-xl"
        >
          <div className="text-center">
            <div className="text-lg font-semibold">Business</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$78</div>
              <div className="text-gray-700">/mo</div>
            </div>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>Advanced analytics</p>
              <p>Dedicated manager</p>
              <p>24/7 premium support</p>
            </div>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200  rounded shadow-md btn btn-sm btn-secondary"
          >
            Buy Business
          </a>
        </motion.div>
      </div>
    </div>
    );
};

export default Pricing;