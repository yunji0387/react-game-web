import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Web App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
