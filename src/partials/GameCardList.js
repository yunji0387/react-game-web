import React from 'react';
import './GameCardList.css';
import GameCard from '../components/GameCard';
import gameList from '../assets/gameList';

const GameCardList = () => {
    return (
        <div className="game-card-list">
            {gameList.map((game, index) => (
                <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    imageUrl={game.imageUrl}
                    imgTitle={game.imgTitle}
                />
            ))}
        </div>
    );
};

export default GameCardList;
