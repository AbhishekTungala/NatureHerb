import React from 'react';
import { motion } from 'framer-motion';

const WellnessOptions = () => {
  const offerings = [
    {
      title: "Ayurveda",
      description: "Harness the power of ancient Ayurvedic remedies to restore balance and vitality in your life.",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      icon: "🌿",
      tagline: "Find Your Balance",
    },
    {
      title: "Yoga & Naturopathy",
      description: "Embrace the union of body and mind through Yoga and natural therapies for a healthier you.",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      icon: "🧘",
      tagline: "Connect Mind & Body",
    },
    {
      title: "Unani",
      description: "Explore the time-tested Unani system that promotes holistic health with natural healing techniques.",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      icon: "🌱",
      tagline: "Holistic Healing",
    },
    {
      title: "Siddha",
      description: "Discover Siddha medicine, a traditional system that emphasizes balance and natural treatments.",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      icon: "🌼",
      tagline: "Ancient Wisdom, Modern Health",
    },
    {
      title: "Homeopathy",
      description: "Unlock the gentle power of Homeopathy to address ailments and improve overall well-being.",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      icon: "💧",
      tagline: "Gentle, Effective Care",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-main-color mb-8">
        Experience the Transformative Power of Nature
      </h2>
      <p className="text-center text-lg text-gray-500 mb-12">
      Immerse yourself in our curated collection of ancient healing traditions. 
      <br></br>
      Each practice is thoughtfully designed to harmonize your body, revitalize your spirit, and elevate your overall well-being.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 ${offering.bgColor} rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="text-5xl mb-4 text-center">{offering.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {offering.title}
            </h3>
            <p className="text-gray-600 text-center mb-4 text-sm">
              {offering.description}
            </p>
            <p className={`text-center font-bold ${offering.textColor} mt-2 text-sm`}>
              {offering.tagline}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WellnessOptions;
