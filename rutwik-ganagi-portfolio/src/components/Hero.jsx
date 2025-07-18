import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';
import '../styles/components/hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = useMemo(() => [
    'Software Engineer & Cloud Enthusiast',
    'Full-Stack Developer',
    'Machine Learning Engineer'
  ], []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex, texts]);

  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__image-container">
          <motion.img 
            src={profileImage} 
            alt="Rutwik Ganagi"
            className="hero__image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__content"
        >
          <h1 className="hero__title">Hi, I'm <span>Rutwik Ganagi</span></h1>
          <h2 className="hero__subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero__description">
            Master's in Software Engineering with expertise in full-stack development, 
            cloud computing, and machine learning.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="btn btn--primary">Contact Me</a>
            <a href="#projects" className="btn btn--secondary">View Projects</a>
          </div>
          <div className="hero__social">
            <a href="https://github.com/rutwikganagi2000" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rutwik-ganagi" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ganagi.r@northeastern.edu">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
