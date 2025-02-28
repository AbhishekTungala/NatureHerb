import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";

const AboutPage = () => {
  const [showMission, setShowMission] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50 relative">
        {/* Background Plants */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/plants-bg.jpg')" }}></div>

        {/* Hero Section */}
        <section className="text-center py-20 relative z-10">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight flex justify-center items-center gap-2">
              About{" "}
              <span className="text-green-600">
                <TypeAnimation
                  sequence={["NatureHerb", 1500, "Your Herbal Guide", 1500]}
                  speed={180}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 w-11/12 md:w-3/5 mx-auto">
              Bridging the gap between traditional herbal wisdom and modern technology
              through immersive digital innovation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white shadow-md rounded-lg mx-auto w-11/12 md:w-3/4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 w-11/12 md:w-3/5 mx-auto">
              We aim to revolutionize the preservation and accessibility of herbal knowledge
              through cutting-edge digital technology.
            </p>
            <button
              onClick={() => setShowMission(!showMission)}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              {showMission ? "Hide Mission" : "Learn More"}
            </button>
            {showMission && (
              <p className="text-gray-600 mt-6 px-6 md:px-20 leading-relaxed">
                Our mission is to create an immersive virtual ecosystem where users can explore 
                a vast repository of medicinal plants, gain deep insights into their therapeutic 
                properties, and interact with them using advanced augmented reality (AR) technology. 
                By integrating AI-driven recommendations and interactive learning, we empower users 
                to rediscover nature’s healing potential in an engaging and personalized way.
              </p>
            )}
          </div>
        </section>

        {/* 🔹 Link to Health & Wellness Section */}
        <section className="py-10 text-center relative z-10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Explore Health & Wellness</h2>
            <p className="text-lg text-gray-600 w-11/12 md:w-3/5 mx-auto">
              Discover more about herbs, natural remedies, and wellness practices.
            </p>
            <Link
              to="/health-wellness"
              className="mt-6 inline-block bg-[#15803d] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Go to Health & Wellness
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-6 text-center relative z-10">
          <p>© 2025 NatureHerb - All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
