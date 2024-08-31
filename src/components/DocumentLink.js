import React from 'react';
import { motion } from 'framer-motion';

const DocumentLink = ({ title, filename }) => (
  <motion.a
    href={filename}
    className="block p-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors mb-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
  </motion.a>
);

export default DocumentLink;