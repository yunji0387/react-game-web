import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/forum">Forum</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
