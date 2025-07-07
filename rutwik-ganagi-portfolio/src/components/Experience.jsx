import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import experienceData from '../data/experience';
import '../styles/components/experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="experience__content"
        >
          <h2 className="section__title">Professional Experience</h2>
          <div className="experience__timeline">
            {experienceData.map((exp, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__header">
                  <h3 className="timeline__title">{exp.title}</h3>
                  <span className="timeline__company">{exp.company}</span>
                  <span className="timeline__date">{exp.date}</span>
                </div>
                <ul className="timeline__details">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;