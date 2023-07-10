import React from 'react';
import './GameCardList.css';
import GameCard from '../components/GameCard';
import tictactoe from '../assets/images/tictactoe.png';

const GameCardList = () => {
    const games = [
        {
            title: 'Tic Tac Toe',
            description: 'The classic 3 x 3 Tic Tac Toe',
            imageUrl: tictactoe,
            imgTitle: 'tictactoe',
        },
        {
            title: 'Tic Tac Toe',
            description: 'The classic 3 x 3 Tic Tac Toe',
            imageUrl: tictactoe,
            imgTitle: 'tictactoe',
        },
        {
            title: 'Tic Tac Toe',
            description: 'The classic 3 x 3 Tic Tac Toe',
            imageUrl: tictactoe,
            imgTitle: 'tictactoe',
        },
    ];

    return (
        <div className="game-card-list">
            {games.map((game, index) => (
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
