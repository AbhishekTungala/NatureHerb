import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({ handleShowBookmarks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Updated paths to match `App.jsx`
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "AR", path: "/ar" },
    { name: "Health", path: "/health-wellness" }, // ✅ Fixed path
    { name: "Bookmark", path: "/bookmark" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="text-black text-2xl font-semibold">
          <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.path} // ✅ Use correct paths
                className="pb-1 text-gray-700 font-medium border-b-2 border-transparent hover:border-green-500 hover:text-green-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 py-4 text-center"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.path} // ✅ Use correct paths
                  className="text-gray-700 text-lg font-semibold hover:text-green-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
