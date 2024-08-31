// src/components/FloatingIcons.js
import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  // Check if the screen width is greater than 768 pixels (medium breakpoint for Tailwind)
  const isMobile = window.innerWidth < 768;

  // Return null to disable icons on mobile
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-4 pr-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* LinkedIn Icon */}
      <motion.a
        href="https://linkedin.com/in/hanan-ather"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        title="LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </motion.a>

      {/* GitHub Icon */}
      <motion.a
        href="https://github.com/hananather"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white"
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        title="GitHub"
      >
        <i className="fab fa-github"></i>
      </motion.a>

      {/* Home Icon */}
      <motion.a
        href="#home"
        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        title="Home"
      >
        <i className="fas fa-home"></i>
      </motion.a>
    </motion.div>
  );
};

export default FloatingIcons;
