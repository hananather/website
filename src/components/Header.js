// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md text-white p-4 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Name or Logo */}
        <div className="text-2xl font-bold">Hanan Ather</div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="courseNotes"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 transition-colors"
          >
            Course Notes
          </Link>
          <Link
            to="papersReports"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 transition-colors"
          >
            Papers and Reports
          </Link>
          <Link
            to="essays"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 transition-colors"
          >
            Essays
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="guidingPrinciples"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-400 transition-colors"
          >
            Guiding Principles
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col mt-4 space-y-2"
        >
          <Link
            to="courseNotes"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Course Notes
          </Link>
          <Link
            to="papersReports"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Papers and Reports
          </Link>
          <Link
            to="essays"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Essays
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="guidingPrinciples"
            smooth={true}
            duration={500}
            className="cursor-pointer py-2 px-4 hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Guiding Principles
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
