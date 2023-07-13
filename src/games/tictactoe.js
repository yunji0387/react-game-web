import React from 'react';
import { useState } from 'react';
import './tictactoe.css';

function Square({ value, onSquareClick }) {
    return (
        <li className="square" onClick={onSquareClick}>
            <p className={`square-text ${value === 'X' ? 'text-X' : 'text-O'}`}>{value}</p>
        </li>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status, nextPlayer;
    if (winner) {
        status = "Winner : ";
        nextPlayer = winner;
    } else {
        status = "Next player: ";
        nextPlayer = (xIsNext ? "X" : "O");
    }

    return (
        <div>
            <div className="status-text">
                {status}
                <span className={nextPlayer === 'X' ? 'text-X' : 'text-O'}>{nextPlayer}</span>
            </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>

            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handlePlay(nextSquares) {
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <button className="reset" onClick={resetGame}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Game;