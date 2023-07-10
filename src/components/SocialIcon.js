import React from 'react';
import './SocialIcon.css';

const SocialIcon = (props) => {
  return (
    <li className="social-icon__item">
      <a className="social-icon__link" href={props.href}>
        <img src={props.src} alt={props.alt} className="social-icon-img-size" />
      </a>
    </li>
  );
};

export default SocialIcon;
