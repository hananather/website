// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import FloatingIcons from './components/FloatingIcons';
import DocumentLink from './components/DocumentLink';
import InteractiveResume from './components/InteractiveResume';
import InteractiveEducation from './components/InteractiveEducation';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Helper component to render text with a scroll reveal effect
const AnimatedText = ({ text, className, letterByLetter = false, delay = 0 }) => {
  // Animation variants for the container and each word/letter
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: letterByLetter ? 0.1 : 0.3, // Faster stagger for letter-by-letter
        delayChildren: delay, // Delay the start of the animation
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const content = letterByLetter
    ? text.split('') // Split by letter for name
    : text.split(' '); // Split by word for the rest

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {content.map((char, index) => (
        <motion.span
          key={index}
          className={letterByLetter ? 'inline-block' : 'inline-block mr-1'}
          variants={child}
        >
          {char === ' ' ? '\u00A0' : char} {/* Keeps spaces intact */}
        </motion.span>
      ))}
    </motion.div>
  );
};

const AnimatedSection = ({ children, className }) => (
  <motion.section
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.5 }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }}
  >
    {children}
  </motion.section>
);

const App = () => (
  <div className="min-h-screen bg-black text-gray-300">
    <Header />
    <FloatingIcons />

    <main className="pt-16">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 -mt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* Letter-by-letter reveal for the name */}
          <AnimatedText
            text="Hanan Ather"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"
            letterByLetter
          />
          {/* Word-by-word reveal for the rest of the bio with a delay */}
          <AnimatedText
            text="I am a Data Scientist at Statistics Canada specializing in cutting-edge AI research and providing consultancy services to both internal & external federal clients."
            className="text-sm sm:text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto break-words"
            delay={1.6} // Adjust the delay to match the duration of the name reveal
          />
        </motion.div>
      </section>

      {/* Professional Journey Section */}
      <AnimatedSection
        id="resume"
        className="py-10 md:py-20 px-4 md:px-8 lg:px-16 h-auto md:h-screen"
      >
        <div className="sticky top-0 bg-black py-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200">
            Professional Journey
          </h2>
        </div>
        <div className="h-auto md:h-[calc(100vh-12rem)] overflow-y-auto">
          <InteractiveResume />
        </div>
      </AnimatedSection>

      {/* Interactive Education Section */}
      <AnimatedSection
        id="education"
        className="py-10 md:py-20 px-4 md:px-8 lg:px-16 bg-black"
      >
        <div className="sticky top-0 bg-black py-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-200">
            Education
          </h2>
        </div>
        <InteractiveEducation />
      </AnimatedSection>

      {/* Additional Sections */}
      <AnimatedSection
        id="publications"
        className="py-10 md:py-20 px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-200">
          Papers & Publications
        </h2>
        <div className="max-w-4xl mx-auto">
          <DocumentLink
            title="Master Thesis: Deep Reinforcement Learning"
            filename="Master Thesis: Deep Reinforcement Learning706.2KB"
          />
          <DocumentLink
            title="Law of the Iterated Logarithm"
            filename="Law of the Iterated Logarithm.pdf"
          />
          <DocumentLink title="MAT4376X" filename="MAT4376X_Hanan.pdf" />
        </div>
      </AnimatedSection>
    </main>

    <Footer />
  </div>
);

export default App;
