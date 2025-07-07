import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__container">
        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`navbar__overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link to="hero" smooth={true} duration={100} offset={-120} onClick={closeMenu} className="navbar__link">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="about" smooth={true} duration={100} offset={-80} onClick={closeMenu} className="navbar__link">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="skills" smooth={true} duration={100} offset={-80} onClick={closeMenu} className="navbar__link">Skills</Link>
          </li>
          <li className="navbar__item">
            <Link to="experience" smooth={true} duration={100} offset={-80} onClick={closeMenu} className="navbar__link">Experience</Link>
          </li>
          <li className="navbar__item">
            <Link to="projects" smooth={true} duration={100} offset={-80} onClick={closeMenu} className="navbar__link">Projects</Link>
          </li>
          <li className="navbar__item">
            <Link to="contact" smooth={true} duration={100} offset={-80} onClick={closeMenu} className="navbar__link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;