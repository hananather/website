// src/components/InteractiveEducation.js
import React from 'react';
import { motion } from 'framer-motion';

const EducationEntry = ({ degree, university, location, years, details }) => (
  <motion.div
    className="text-center mb-8" // Removed box styling
    whileHover={{ scale: 1.05 }} // Slight scaling on hover
    whileTap={{ scale: 0.95 }} // Slightly reduce size on tap
    transition={{ type: 'spring', stiffness: 200, damping: 15 }} // Smooth and natural animation
  >
    <h3 className="text-3xl font-bold mb-2 text-gray-200">{degree}</h3>
    <p className="text-xl mb-1 text-gray-400">{university}</p>
    <p className="text-md mb-1 text-gray-500 italic">{location}</p>
    <p className="text-md mb-4 text-gray-500">{years}</p>
    {details.map((detail, i) => (
      <p key={i} className="text-md mb-2 text-gray-300">{detail}</p>
    ))}
  </motion.div>
);

const InteractiveEducation = () => {
  const educationEntries = [
    {
      degree: "Master of Science in Mathematics and Statistics",
      university: "University of Ottawa",
      location: "Ottawa, Canada",
      years: "2021 – 2024",
      details: ["Thesis: Deep Reinforcement Learning and Function Optimization"],
    },
    {
      degree: "Honours Bachelor of Science - Mathematics & Statistics",
      university: "University of Ottawa",
      location: "Ottawa, Canada",
      years: "2015 – 2020",
      details: ["Dean’s Honours List"],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {educationEntries.map((entry, index) => (
        <EducationEntry
          key={index}
          degree={entry.degree}
          university={entry.university}
          location={entry.location}
          years={entry.years}
          details={entry.details}
        />
      ))}
    </div>
  );
};

export default InteractiveEducation;
