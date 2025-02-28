import React from "react";
import { motion } from "framer-motion";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center p-8 pt-36">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your Bookmarks
      </motion.h1>

      {/* No Bookmarks Message */}
      {bookmarks.length === 0 ? (
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          No bookmarks yet! Save your favorite links here.
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {bookmarks.map((bookmark, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-xl shadow-lg transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={bookmark.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-green-400 hover:text-green-300 transition-all"
              >
                {bookmark.title}
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
