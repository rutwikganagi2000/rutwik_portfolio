import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from '../data/projects';
import '../styles/components/projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="projects__content"
        >
          <h2 className="section__title">Featured Projects</h2>
          <div className="projects__grid">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                className="project__card"
                whileHover={{ y: -5 }}
              >
                <div className="project__header">
                  <h3 className="project__title">{project.title}</h3>
                  <div className="project__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Code
                      </a>
                    )}
                  </div>
                </div>
                <p className="project__description">{project.description}</p>
                <ul className="project__tech">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;