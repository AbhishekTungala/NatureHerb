import React from "react";

const FirstPage = ({ onGetStartedClick }) => {
    return (
        <div className="h-screen flex items-center justify-start px-32 animate-random-gradient">
            {/* Text Section */}
            <div className="flex flex-col w-7/12 text-white">
                <h1 className="text-5xl font-extrabold font-serif drop-shadow-xl mb-6 leading-tight">
                    Embrace Nature’s Healing Power
                </h1>
                <p className="text-lg text-gray-200">
                    Explore the profound benefits of medicinal plants and Ayurvedic remedies.  
                    <br />
                    Reconnect with nature and discover holistic well-being through time-tested wisdom.
                </p>
                <button
                    className="bg-green-500 text-white px-6 py-3 text-lg font-medium rounded-xl mt-10 w-48
                    transition-transform transform hover:scale-110 hover:bg-green-700 hover:shadow-lg duration-300 ease-in-out"
                    onClick={onGetStartedClick}
                >
                    Get Started
                </button>
            </div>

            {/* Image Section */}
            <div className="w-1/20 ">
                <img
                    src="/images/New firstpage.png"
                    alt="Nature"
                    className="ml-10 mt-14"
                />
            </div>
        </div>
    );
};

export default FirstPage;
