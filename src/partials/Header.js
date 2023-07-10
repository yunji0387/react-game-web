import React from 'react';
import './Header.css';
import ShieldLogo from '../assets/images/miniShield.png';
import SwordLogo from '../assets/images/miniSword.png';

const Header = () => {
  return (
    <div className="header">
      <img src={ShieldLogo} alt="Shield Logo" className="header-img-size" />
      <h1 className="header-text">Mini Games Web</h1>
      <img src={SwordLogo} alt="Shield Logo" className="header-img-size" />
    </div>
  );
};

export default Header;
