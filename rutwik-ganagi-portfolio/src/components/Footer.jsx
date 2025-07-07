import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Rutwik Ganagi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;