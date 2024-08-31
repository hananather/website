// src/components/InteractiveResume.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineEntry = ({ date, title, company, isLeft, index, total, logo }) => {
  const controls = useAnimation();
  const verticalLineControls = useAnimation();
  const horizontalLineControls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2 },
      });

      verticalLineControls.start({
        height: `${((index + 1) / total) * 100}%`,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });

      horizontalLineControls.start({
        width: '100%',
        transition: { duration: 0.5, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        x: isLeft ? -50 : 50,
        transition: { duration: 0.5 },
      });

      verticalLineControls.start({
        height: `${(index / total) * 100}%`,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });

      horizontalLineControls.start({
        width: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });
    }
  }, [controls, verticalLineControls, horizontalLineControls, inView, isLeft, index, total]);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isLeft ? 'md:flex-row-reverse' : ''
      } items-center w-full my-8 md:my-16 relative`}
    >
      {/* Entry Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'text-right' : ''} mb-4 md:mb-0`}>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg relative flex items-center space-x-4"
        >
          {logo && (
            <img src={logo} alt={`${company} logo`} className="h-8 w-8" />
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-300">{title}</h3>
            <h4 className="text-lg font-semibold text-gray-400">{company}</h4>
            <p className="text-gray-500">{date}</p>
          </div>
        </motion.div>
      </div>

      {/* Vertical line in the center for larger screens */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        <motion.div
          className="absolute w-1 bg-white"
          style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
          initial={{ height: 0 }}
          animate={verticalLineControls}
        ></motion.div>
        {/* Horizontal branch line */}
        <motion.div
          className={`absolute h-1 bg-white ${isLeft ? 'right-0' : 'left-0'}`}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          initial={{ width: 0 }}
          animate={horizontalLineControls}
        ></motion.div>
      </div>

      {/* Empty Space for Layout Adjustment */}
      <div className="w-full md:w-5/12"></div>
    </div>
  );
};

const InteractiveResume = () => {
  const experiences = [
    {
      date: "July 2022 - Present",
      title: "Mathematical Statistician",
      company: "Statistics Canada",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    },
    {
      date: "December 2020 - July 2022",
      title: "Data Scientist",
      company: "Treasury Board of Canada Secretariat",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
    },
    {
      date: "April 2020 - September 2020",
      title: "Machine Learning Researcher",
      company: "University of Ottawa, Department of Mathematics and Statistics",
      logo: "https://www.uottawa.ca/themes/custom/uottawa/favicon.ico",
    },
    {
      date: "May 2019 - August 2019",
      title: "Undergraduate Researcher",
      company: "University of Ottawa, Department of Mathematics and Statistics",
      logo: "https://www.uottawa.ca/themes/custom/uottawa/favicon.ico",
    },
    {
      date: "May 2018 - August 2018",
      title: "Research Assistant",
      company: "University of Ottawa, Department of Cellular and Molecular Medicine",
      logo: "https://www.uottawa.ca/themes/custom/uottawa/favicon.ico",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto relative">
      {experiences.map((exp, index) => (
        <TimelineEntry
          key={index}
          date={exp.date}
          title={exp.title}
          company={exp.company}
          isLeft={index % 2 === 0}
          index={index}
          total={experiences.length}
          logo={exp.logo}
        />
      ))}
    </div>
  );
};

export default InteractiveResume;
