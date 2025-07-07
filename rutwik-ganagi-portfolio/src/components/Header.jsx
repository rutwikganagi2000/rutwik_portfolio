import React from 'react';
import { Link } from 'react-scroll';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__nav">
          <Link to="hero" smooth={true} duration={100} offset={-120} className="header__link">Home</Link>
          <Link to="about" smooth={true} duration={100} offset={-80} className="header__link">About</Link>
          <Link to="skills" smooth={true} duration={100} offset={-80} className="header__link">Skills</Link>
          <Link to="experience" smooth={true} duration={100} offset={-80} className="header__link">Experience</Link>
          <Link to="projects" smooth={true} duration={100} offset={-80} className="header__link">Projects</Link>
          <Link to="contact" smooth={true} duration={100} offset={-80} className="header__link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;