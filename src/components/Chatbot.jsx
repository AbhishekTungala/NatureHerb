import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { text: "Hello! I am your health and wellness chatbot. Ask me anything about health, plants, or remedies!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        const botResponse = getBotResponse(input);
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: "bot" }]);
        }, 1000);

        setInput("");
    };

    const getBotResponse = (message) => {
        message = message.toLowerCase();
        if (message.includes("skin care")) return "Aloe Vera and Turmeric are excellent for skin care. They help in hydration and treating acne.";
        if (message.includes("hair care")) return "Using Amla, Hibiscus, and Coconut Oil can improve hair strength and reduce hair fall.";
        if (message.includes("mental health")) return "Lavender, Chamomile, and meditation can help reduce stress and improve mental well-being.";
        if (message.includes("sleep")) return "Try drinking Chamomile tea or using Lavender essential oil for better sleep.";
        if (message.includes("exercise") || message.includes("fitness")) return "Regular exercise like walking, yoga, and stretching improves overall health and well-being.";
        if (message.includes("diet") || message.includes("nutrition")) return "A balanced diet with proteins, healthy fats, and fiber is essential for maintaining energy and immunity.";
        if (message.includes("hydration") || message.includes("water")) return "Drinking 2-3 liters of water daily helps in digestion, skin health, and detoxification.";
        if (message.includes("tulsi")) return "Tulsi (Holy Basil) is known for boosting immunity, reducing stress, and improving respiratory health.";
        if (message.includes("neem")) return "Neem is great for skin care, blood purification, and dental hygiene.";
        if (message.includes("aloe vera")) return "Aloe Vera helps in digestion, skin hydration, and wound healing.";
        if (message.includes("herbal tea")) return "Chamomile, Tulsi, and Peppermint herbal teas are great for relaxation and digestion.";
        if (message.includes("ginger")) return "Ginger helps with digestion, nausea relief, and boosts immunity.";
        if (message.includes("turmeric")) return "Turmeric contains curcumin, which has anti-inflammatory and antioxidant properties.";
        if (message.includes("cold") || message.includes("cough")) return "Try drinking ginger tea with honey or Tulsi leaves for relief from cold and cough.";
        if (message.includes("headache")) return "Drinking peppermint tea or applying lavender oil on the temples can help with headaches.";
        if (message.includes("digestion")) return "Ginger, fennel, and probiotics like yogurt aid digestion.";
        if (message.includes("stress") || message.includes("anxiety")) return "Deep breathing, meditation, and herbal teas like Chamomile can help relieve stress.";
        if (message.includes("hydrate regularly")) return "🚰 Drinking water consistently throughout the day keeps you energized, aids digestion, and maintains skin health.";
        if (message.includes("eat whole foods")) return "🍎 Eating whole foods like fruits, vegetables, nuts, and grains improves nutrition and overall well-being.";
        if (message.includes("daily exercise")) return "💪 Engaging in daily exercise such as walking, jogging, or yoga keeps your body fit and boosts mental health.";
        if (message.includes("mental wellness")) return "🧠 Prioritizing mental wellness through meditation, deep breathing, and journaling helps reduce stress and improves emotional balance.";
        if (message.includes("lavender")) return "🌸 Lavender is known for its calming effects, helping with stress, anxiety, and sleep disorders.";
        if (message.includes("sage")) return "🍃 Sage has antibacterial properties and is used for memory improvement and throat health.";
        if (message.includes("dandelion")) return "🌼 Dandelion is great for liver health, detoxification, and boosting digestion.";
        if (message.includes("cactus")) return "🌵 Cactus plants store water and are great for skin hydration. Prickly pear cactus is also rich in antioxidants.";
        if (message.includes("hibiscus")) return "🌺 Hibiscus tea helps lower blood pressure, supports heart health, and improves hair growth.";
        if (message.includes("ashwagandha")) return "🌿 Ashwagandha helps reduce stress, improve sleep, and boost brain function.";
        if (message.includes("rosemary")) return "🌿 Rosemary enhances memory, improves digestion, and has anti-inflammatory properties.";
        if (message.includes("eucalyptus")) return "🌱 Eucalyptus is commonly used for respiratory relief, cold symptoms, and muscle relaxation.";
        if (message.includes("sore throat")) return "🗣️ Gargling with warm salt water or drinking honey-lemon tea can help soothe a sore throat.";
        if (message.includes("constipation")) return "🍏 Eating fiber-rich foods, drinking warm water, and consuming flaxseeds can relieve constipation.";
        if (message.includes("bloating")) return "🌿 Peppermint tea, ginger, and fennel seeds help reduce bloating.";
        if (message.includes("high blood pressure")) return "🍌 Eating potassium-rich foods like bananas and drinking hibiscus tea can help lower blood pressure.";
        if (message.includes("low blood pressure")) return "🧂 Drinking salt water or having coffee can help temporarily raise blood pressure.";
        if (message.includes("diabetes")) return "🥒 Consuming bitter gourd (karela), fenugreek seeds, and cinnamon can help manage blood sugar levels.";
        if (message.includes("arthritis")) return "🦴 Turmeric, ginger, and omega-3 fatty acids can help reduce arthritis pain and inflammation.";
        if (message.includes("weight loss")) return "⚖️ Drinking green tea, increasing fiber intake, and regular exercise can aid in weight loss.";
        if (message.includes("weight gain")) return "🍗 Eating protein-rich foods, nuts, and avocados can support healthy weight gain.";
        if (message.includes("depression")) return "🌞 Sun exposure, exercise, and foods rich in omega-3 like walnuts can improve mood.";
        if (message.includes("memory loss")) return "🧠 Consuming walnuts, rosemary, and doing brain exercises can help improve memory.";
        if (message.includes("energy boost")) return "⚡ Drinking lemon water, eating bananas, and consuming nuts can give a natural energy boost.";
        if (message.includes("muscle pain")) return "💪 Magnesium-rich foods, turmeric, and Epsom salt baths can help relieve muscle pain.";
        if (message.includes("allergies")) return "🤧 Local honey, nettle tea, and eucalyptus steam inhalation can help with seasonal allergies.";
        if (message.includes("sinus")) return "🫁 Steam inhalation with eucalyptus oil and drinking warm turmeric milk can help clear sinuses.";
        if (message.includes("eye strain")) return "👀 Using rose water eye drops and taking regular screen breaks can reduce eye strain.";
        if (message.includes("menstrual cramps") || message.includes("period pain")) return "🩸 Drinking chamomile tea, massaging with castor oil, and light yoga can help relieve period cramps.";
        if (message.includes("liver detox")) return "🍵 Milk thistle, dandelion root tea, and lemon water can help detox the liver.";
        if (message.includes("kidney stones")) return "💧 Drinking plenty of water and consuming lemon juice with olive oil can help pass kidney stones.";
        if (message.includes("weak immunity")) return "🦠 Consuming Tulsi, turmeric, and vitamin C-rich foods like oranges can boost immunity.";
        if (message.includes("bad breath")) return "🦷 Chewing fennel seeds, cardamom, or drinking mint tea can help freshen breath.";
        if (message.includes("joint pain")) return "🏋️‍♂️ Omega-3 fatty acids, turmeric, and warm compresses can help with joint pain.";
        if (message.includes("dandruff")) return "🦱 Applying neem oil or using an apple cider vinegar rinse can help reduce dandruff.";
        if (message.includes("toothache")) return "🦷 Clove oil or rinsing with warm salt water can relieve a toothache.";
        if (message.includes("sunburn")) return "☀️ Applying aloe vera gel and coconut oil can help soothe sunburned skin.";
        if (message.includes("fever")) return "🌡️ Drinking tulsi tea, staying hydrated, and resting can help recover from a fever faster.";
        if (message.includes("eat whole foods")) return "🥑 Eating whole foods like fruits, vegetables, nuts, and grains provides essential nutrients for a healthy body.";
        if (message.includes("daily exercise")) return "🏃‍♀️ Daily physical activity helps maintain weight, reduces stress, and strengthens your heart.";
        if (message.includes("mental wellness")) return "🧠 Practicing mindfulness, journaling, and getting fresh air can boost your mental wellness.";

        return "I can help with health, plants, and natural remedies! Try asking about skin care, fitness, Tulsi, or home remedies.";
    };

    return (
        <div className="flex flex-col h-screen p-6 bg-gray-100">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-green-700 mb-4 animate-fadeIn">🌿 Health & Wellness Chatbot</h1>

            {/* Chatbox */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex-1 overflow-auto border border-gray-300">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`mb-3 p-3 rounded-lg text-lg shadow-md max-w-md transition-all ${
                            msg.sender === "bot" 
                                ? "bg-green-100 text-green-700 text-left animate-slideInLeft" 
                                : "bg-blue-100 text-blue-700 text-right ml-auto animate-slideInRight"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Field */}
            <div className="mt-4 flex">
                <input
                    type="text"
                    className="flex-1 p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    className="ml-3 bg-green-600 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
                    onClick={handleSend}
                >
                    Send
                </button>
            </div>

            {/* Back to Health & Wellness Page */}
            <button 
                className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-green-700 transition"
                onClick={() => navigate("/health-wellness")}
            >
                🔙 Back to Health & Wellness
            </button>
        </div>
    );
};

export default Chatbot;
