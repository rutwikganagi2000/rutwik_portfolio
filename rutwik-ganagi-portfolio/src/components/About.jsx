import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import northeasternLogo from '../assets/images/neu.png';
import pesLogo from '../assets/images/pes.png';
import '../styles/components/about.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="about__content"
        >
          <h2 className="section__title">About Me</h2>
          <div className="about__grid">
            <div className="about__text">
              <p>
                I'm a passionate Software Engineer with a Master's degree in Software Engineering Systems 
                from Northeastern University and a Bachelor's in Electronics and Communication Engineering 
                from PES University.
              </p>
              <p>
                With professional experience at Société Générale and Bosch, I've developed expertise in 
                full-stack development, cloud computing, and DevOps practices. I'm particularly interested 
                in building scalable, high-performance applications with modern technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or hiking in the beautiful New England outdoors.
              </p>
            </div>
            <div className="about__education">
              <h3>Education</h3>
              <div className="education__item">
                <div className="education__header">
                  <img 
                    src={northeasternLogo} 
                    alt="Northeastern University Logo" 
                    className="education__logo"
                  />
                  <div>
                    <h4>Northeastern University</h4>
                    <p>Master of Science in Software Engineering Systems</p>
                  </div>
                </div>
              </div>
              <div className="education__item">
                <div className="education__header">
                  <img 
                    src={pesLogo} 
                    alt="PES University Logo" 
                    className="education__logo"
                  />
                  <div>
                    <h4>PES University</h4>
                    <p>Bachelor of Technology in Electronics and Communication Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;