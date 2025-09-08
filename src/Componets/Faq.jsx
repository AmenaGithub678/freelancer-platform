import React from 'react';
import { motion } from "framer-motion";
import { FaQuestionCircle, FaLock, FaUsers, FaRegClock, FaMoneyBillWave, FaRegSmile } from "react-icons/fa";
const Faq = () => {
const faqData = [
    {
      icon: <FaQuestionCircle className="text-indigo-500 w-8 h-8" />,
      question: "How do I post a new task?",
      answer: "Simply go to the 'Add Task' page, fill in the details like title, budget, deadline, and submit."
    },
    {
      icon: <FaLock className="text-teal-500 w-8 h-8" />,
      question: "Is my data secure?",
      answer: "Yes, we use secure authentication and protect all your personal information safely."
    },
    {
      icon: <FaUsers className="text-pink-500 w-8 h-8" />,
      question: "Can I work as both client and freelancer?",
      answer: "Absolutely! You can post tasks as a client or place bids as a freelancer with the same account."
    },
    {
      icon: <FaRegClock className="text-yellow-500 w-8 h-8" />,
      question: "How long does it take to get bids?",
      answer: "Usually within a few minutes to hours, depending on the task category and budget."
    },
    {
      icon: <FaMoneyBillWave className="text-green-500 w-8 h-8" />,
      question: "How do payments work?",
      answer: "Clients deposit payment securely, and freelancers receive it once the task is completed."
    },
    {
      icon: <FaRegSmile className="text-blue-500 w-8 h-8" />,
      question: "Why should I choose this platform?",
      answer: "Because it's user-friendly, reliable, and connects freelancers and clients faster than ever!"
    }
  ];   
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF]  md:px-24 lg:px-8 lg:py-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#AD56C4]  mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Here are the most asked questions based on our users</p>
      </div>

      {/* FAQ Grid */}
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-8 border-b sm:border-r shadow-md rounded-lg 
            bg-[#FFBDA1]    hover:shadow-xl"
          >
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50">
                {faq.icon}
              </div>
              <h6 className="mb-2 font-semibold leading-5">{faq.question}</h6>
              <p className="mb-3 text-sm text-gray-700">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    );
};

export default Faq;