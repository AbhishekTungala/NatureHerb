import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Navbar from './Navbar';
import { categories, wellnessTips, herbalRemedies, faqs } from "../services/data";

const HealthWellness = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const openModal = (category) => {
        setSelectedCategory(category);
    };

    const closeModal = () => {
        setSelectedCategory(null);
    };

    // Navigate to Chatbox on button click
    const handleGetStartedClick = () => {
        navigate('/chatbox'); // Assuming you have a route set up for Chatbox.jsx
    };

    return (
        <>
            <Navbar />
            <div className="py-8 px-4 text-center pt-36">
                <h2 className="text-3xl font-bold mb-6 text-green-700">
                    Explore Health & Wellness Categories
                </h2>

                <p className="text-lg mb-8 text-gray-600 mx-auto max-w-3xl">
                    Discover the power of natural remedies and holistic living through our curated categories.
                    Learn more about plants that can improve your skin, hair, fitness, and overall well-being.
                </p>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-10">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 cursor-pointer duration-300 ease-in-out"
                            onClick={() => openModal(category)}
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={category.imageUrl}
                                alt={`Image representing ${category.name}`}
                            />
                            <div className="p-4">
                                <h3 className="text-xl pb-2 font-semibold">{category.name}</h3>
                                <p className="text-sm text-gray-500">
                                    Explore plants and herbs known for their healing and wellness properties.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wellness Tips Section */}
                <div className="mt-12 px-4">
                    <h2 className="text-3xl font-bold mb-10 text-green-700">Wellness Tips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
                        {wellnessTips.map((tip, index) => (
                            <div key={index} className="bg-green-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">{tip.title}</h3>
                                <p className="text-gray-600">{tip.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Get Started Button Linked to Chatbox */}
                    <div className="mt-16 bg-green-50 py-8 px-6 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-green-700 mb-4">
                            Take a Step Towards Better Health
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            Embrace natural living and enhance your well-being by integrating these herbs 
                            and practices into your daily life. Join us in a journey towards a healthier, balanced lifestyle.
                        </p>
                        <button
                            onClick={handleGetStartedClick}
                            className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>

                {/* Modal */}
                {selectedCategory && <Modal category={selectedCategory} closeModal={closeModal} />}
            </div>
        </>
    );
};

export default HealthWellness;
