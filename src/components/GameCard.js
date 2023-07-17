import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = (props) => {
  const WrapperComponent = props.isAvailable ? Link : 'div';
  return (
    <WrapperComponent to={props.url} className={`${props.isAvailable ? 'game-card' : 'unavailable-game-card'}`}>
      <img className="game-card__image" src={props.imageUrl} alt={props.imgTitle} />
      <div className="game-card__details">
        <h2 className="game-card__title">{props.title}</h2>
        <p className="game-card__description">{props.description}</p>
      </div>
    </WrapperComponent>
  );

};

export default GameCard;
