import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ARPage = () => {
  const [showAR, setShowAR] = useState(false);
  const [cameraAccessGranted, setCameraAccessGranted] = useState(false);

  const toggleAR = () => {
    if (!showAR) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {
          console.log("Camera access granted");
          setCameraAccessGranted(true);
          setShowAR(true);
        })
        .catch((err) => {
          console.error("Camera access denied: ", err);
          alert("Camera access is required to use the AR functionality.");
        });
    } else {
      setShowAR(false);
      setCameraAccessGranted(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#015529] to-black p-6">
        
        {/* Moving everything further up */}
        <div className="mt-10"></div>

        {/* VR Image (AR.png) */}
        <motion.img
          src="/images/AR.png"
          alt="AR Experience"
          className="max-w-md mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Page Title (Moved Up) */}
        <motion.h1
          className="text-4xl font-bold text-white mb-2 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Augmented Reality Experience
        </motion.h1>

        {/* Description (Moved Up) */}
        <motion.p
          className="text-lg text-gray-300 max-w-xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the future of technology with AR. Click the button below to
          start your AR experience!
        </motion.p>

        {/* Button (Moved Up) */}
        <motion.button
          onClick={toggleAR}
          className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showAR ? "Hide AR View" : "Launch AR Experience"}
        </motion.button>

        {/* Additional space before AR Scene */}
        <div className="mt-12"></div>

        {/* AR Scene */}
        {showAR && cameraAccessGranted && (
          <motion.div
            className="mt-16 w-full flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a-scene
              embedded
              arjs="sourceType: webcam; debugUIEnabled: false;"
              renderer="logarithmicDepthBuffer: true;"
              className="w-full max-w-lg border-2 border-white shadow-lg rounded-xl overflow-hidden"
            >
              <a-marker preset="hiro">
                <a-box
                  position="0 0.5 0"
                  rotation="0 45 0"
                  color="#FF5733"
                  animation="property: rotation; to: 0 405 0; loop: true; dur: 4000"
                ></a-box>
              </a-marker>
              <a-entity camera></a-entity>
            </a-scene>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ARPage;
