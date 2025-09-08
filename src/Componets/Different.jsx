import React from "react";
import { GrAchievement } from "react-icons/gr";
import { GiPayMoney, GiTeamIdea } from "react-icons/gi";
import { AiOutlineSafety, AiOutlineGlobal } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router";

const features = [
  {
    icon: <GrAchievement size={35} />,
    title: "Proof of Talent",
    desc: "Verified profiles, real feedback, and clear credentials.",
  },
  {
    icon: <GiPayMoney size={37} />,
    title: "Pay Only When You Hire",
    desc: "Interview for free, pay once you’re satisfied.",
  },
  {
    icon: <AiOutlineSafety size={35} />,
    title: "24/7 Secure Platform",
    desc: "Your work and privacy are always protected.",
  },
  {
    icon: <GiTeamIdea size={37} />,
    title: "Smart Collaboration",
    desc: "Built-in tools to track projects and communicate effectively.",
  },
  {
    icon: <AiOutlineGlobal size={35} />,
    title: "Global Opportunities",
    desc: "Connect with clients and freelancers worldwide.",
  },
  {
    icon: <MdSupportAgent size={37} />,
    title: "Dedicated Support",
    desc: "Round-the-clock support to help you resolve issues quickly.",
  },
];

const Different = () => {
  return (
    <div className="my-12 mx-auto px-4 mt-10">
      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg rounded-2xl overflow-hidden">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 p-8"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Why{" "}
            <span className="text-yellow-300 italic">Freelance Fusion</span>{" "}
            is Different From Others!
          </h2>
          <ul className="space-y-5 text-gray-200">
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="text-yellow-300 mt-1">{item.icon}</span>
                <p className="italic">
                  <span className="font-bold not-italic text-white">
                    {item.title} –
                  </span>{" "}
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8">
            <Link to="/auth/login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-active btn-info px-6 py-3 rounded-full shadow-md"
              >
                Log In Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.ibb.co.com/3qmMVnF/variety-people-multitasking-3d-cartoon-scene.jpg"
            alt="Freelancer"
            className="w-full h-full object-cover rounded-t-lg lg:rounded-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Different;
