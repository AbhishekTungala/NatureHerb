import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ARPage from "./pages/ARPage";
import AboutPage from "./pages/About";
import HealthWellness from "./components/HealthWellness"; // ✅ Ensure correct import
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar"; // ✅ Ensure Navbar is included
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* ✅ Place Navbar inside Router to ensure navigation works */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ar" element={<ARPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/chatbox" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
