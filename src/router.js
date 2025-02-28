import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HealthWellness from "./components/HealthWellness";
import ChatBox from "./components/ChatBox";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/health-wellness" element={<HealthWellness />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
