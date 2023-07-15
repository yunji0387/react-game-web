import React, { useState } from 'react';
import './rockpaperscissors.css';
import './game.css';
import rockImg from '../assets/images/rockPaperScissor/rock.png';
import paperImg from '../assets/images/rockPaperScissor/paper.png';
import scissorsImg from '../assets/images/rockPaperScissor/scissor.png';

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState("Please choose your choice.");

    const choices = ['rock', 'paper', 'scissors'];

    const handleChoice = (choice) => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];

        setPlayerChoice(choice);
        setComputerChoice(computerChoice);
        setResult(getResult(choice, computerChoice));
    };

    const getResult = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return "It's a tie! Please choose a choice to play again.";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win! Please choose a choice to play again.';
        } else {
            return 'Computer wins! Please choose a choice to play again.';
        }
    };

    const getImageSource = (choice) => {
        switch (choice) {
            case 'rock':
                return rockImg;
            case 'paper':
                return paperImg;
            case 'scissors':
                return scissorsImg;
            default:
                return null;
        }
    };

    const getResultStyle = (result, isPlayer) => {
        switch (result) {
            case "It's a tie! Please choose a choice to play again.":
                return "";
            case "You win! Please choose a choice to play again.":
                if(isPlayer){
                    return "rps-win-choice";
                }else{
                    return "rps-lose-choice";
                }
            case "Computer wins! Please choose a choice to play again.":
                if(isPlayer){
                    return "rps-lose-choice";
                }else{
                    return "rps-win-choice";
                }
            default:
                return null;
        }
    };

    return (
        <div className="rps-game container">
            <p className="rps-title">
                Rock Paper Scissors
            </p>
            <p className="rps-result">{result}</p>
            <div className="choice-container">
                <div className={`choice player-choice ${getResultStyle(result, true)}`}>
                    <p className="rps-choice-text">Player's Choice:</p>
                    {playerChoice && (
                        <img
                            src={getImageSource(playerChoice)}
                            alt="Player Choice"
                            className="choice-img"
                        />
                    )}
                </div>
                <div className={`choice computer-choice ${getResultStyle(result, false)}`}>
                    <p className="rps-choice-text">Computer's Choice:</p>
                    {computerChoice && (
                        <img
                            src={getImageSource(computerChoice)}
                            alt="Computer Choice"
                            className="choice-img"
                        />
                    )}
                </div>
            </div>
            <div className="rps-button-choice">
                <button className="rps-button rock-button" onClick={() => handleChoice('rock')}>Rock</button>
                <button className="rps-button paper-button" onClick={() => handleChoice('paper')}>Paper</button>
                <button className="rps-button scissor-button" onClick={() => handleChoice('scissors')}>Scissors</button>
            </div>
        </div>
    );
}

export default Game;
