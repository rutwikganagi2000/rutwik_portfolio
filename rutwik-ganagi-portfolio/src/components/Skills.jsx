import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skillsData from '../data/skills';
import '../styles/components/skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skills__content"
        >
          <h2 className="section__title">Technical Skills</h2>
          <div className="skills__grid">
            {skillsData.map((category, index) => (
              <div key={index} className="skills__category">
                <h3>{category.category}</h3>
                <ul className="skills__list">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill__item">
                      <span className="skill__icon">{skill.icon}</span>
                      {skill.name}
                    </li>
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

export default Skills;