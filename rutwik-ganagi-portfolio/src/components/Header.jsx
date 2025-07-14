import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/header.css';

const navLinks = [
  { to: 'hero', label: 'Home', offset: -120 },
  { to: 'about', label: 'About', offset: -80 },
  { to: 'skills', label: 'Skills', offset: -80 },
  { to: 'experience', label: 'Experience', offset: -80 },
  { to: 'projects', label: 'Projects', offset: -80 },
  { to: 'contact', label: 'Contact', offset: -80 },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__brand">MyPortfolio</div>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={200}
              offset={link.offset}
              className="header__link"
              activeClass="header__link--active"
              spy={true}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className={`header__menu-btn ${menuOpen ? 'header__menu-btn--open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
