// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
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
        staggerChildren: letterByLetter ? 0.1 : 0.08,
        delayChildren: delay,
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

  const content = letterByLetter ? text.split('') : text.split(' ');

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
          {char === ' ' ? '\u00A0' : char}
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
          viewport={{ once: true, amount: 0.5 }} // Animate only once when in view
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          {/* Letter-by-letter reveal for the name */}
          <AnimatedText
            text="Hanan Ather"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200"
            letterByLetter
          />

          {/* Typing effect for combined roles with initial reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // Ensures it animates only once
            transition={{ delay: 2, duration: 0.8 }} // Delay to match the end of the name reveal
            className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-gray-300"
          >
            I'm a{' '}
            <ReactTyped
              strings={[
                'Data Scientist',
                'Consultant',
                'AI Engineer',
                'Researcher',
                'Designer',
                'Writer'
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Text Revealed on Scroll */}
      <AnimatedSection
  id="intro"
  className="pt-5 pb-10 md:pb-20 px-4 md:px-8 lg:px-16 text-center bg-black"
>
  <AnimatedText
    text="I am a Data Scientist at Statistics Canada specializing in cutting-edge AI research and providing consultancy services to both internal & external federal clients."
    className="text-sm sm:text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto break-words"
  />
</AnimatedSection>

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
