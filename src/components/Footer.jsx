import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-10 shadow-2xl border-t-4 border-green-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between h-auto md:h-24 items-center"
      >
        {/* Left Section: Logo */}
        <motion.div whileHover={{ scale: 1.1 }} className="mb-8 md:mb-0 md:w-1/3">
          <img src="/images/AYURB.png" alt="AyurHerb Logo" className="h-20 mt-4 drop-shadow-lg" />
        </motion.div>

        {/* Center Section: Address & Email */}
        <div className="md:w-1/3 text-center md:text-left text-[#16a34a]">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center md:justify-start mb-4">
            <i className="fa-solid fa-location-dot text-2xl mr-4 text-[#155d27]"></i>
            <p className="text-lg font-medium">
              <span className="block">Lovely Professional University, Punjab.</span>
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center md:justify-start">
            <i className="fa-solid fa-envelope text-2xl mr-4 text-[#155d27]"></i>
            <p className="text-lg font-medium">natureherb@gmail.com</p>
          </motion.div>
        </div>

        {/* Right Section: Tech Stack */}
        <div className="md:w-1/4 text-center md:text-left">
          <span className="text-xl font-bold text-black">Technology Stack Used:</span>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 space-x-4">
            <motion.i whileHover={{ scale: 1.3 }} className="fab fa-react text-4xl text-blue-400"></motion.i>
            <motion.i whileHover={{ scale: 1.3 }} className="fab fa-node-js text-4xl text-green-300"></motion.i>
            <motion.i whileHover={{ scale: 1.3 }} className="fas fa-database text-4xl text-yellow-400"></motion.i>
            <motion.i whileHover={{ scale: 1.3 }} className="fas fa-vr-cardboard text-4xl text-purple-400"></motion.i>
            <motion.i whileHover={{ scale: 1.3 }} className="fab fa-css3-alt text-4xl text-blue-500"></motion.i>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center pt-4 mt-8 text-[#16a34a]"
      >
        <p className="text-lg font-medium tracking-wide">
          © 2025 NatureHerb - All Rights Reserved. Designed & Developed by Team NatureHerb.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;