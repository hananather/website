// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-400 text-lg mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/hanan-ather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hananather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
