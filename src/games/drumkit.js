import React, { useState, useEffect } from 'react';
import './drumkit.css';
import './game.css';
import tom1Sound from '../assets/audios/tom-1.mp3';
import tom2Sound from '../assets/audios/tom-2.mp3';
import tom3Sound from '../assets/audios/tom-3.mp3';
import tom4Sound from '../assets/audios/tom-4.mp3';
import crashSound from '../assets/audios/crash.mp3';
import kickBassSound from '../assets/audios/kick-bass.mp3';
import snareSound from '../assets/audios/snare.mp3';


function Game() {
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
  };

  const handleClick = (event) => {
    makeSound(event.target.innerHTML);
    buttonAnimation(event.target.innerHTML);
  };

  const makeSound = (key) => {
    switch (key) {
      case 'w':
        let tom1 = new Audio(tom1Sound);
        tom1.play();
        break;
      case 'a':
        let tom2 = new Audio(tom2Sound);
        tom2.play();
        break;
      case 's':
        let tom3 = new Audio(tom3Sound);
        tom3.play();
        break;
      case 'd':
        let tom4 = new Audio(tom4Sound);
        tom4.play();
        break;
      case 'j':
        let crash = new Audio(crashSound);
        crash.play();
        break;
      case 'k':
        let kickBass = new Audio(kickBassSound);
        kickBass.play();
        break;
      case 'l':
        let snare = new Audio(snareSound);
        snare.play();
        break;
      default:
        console.log(key);
        break;
    }
  };

  const buttonAnimation = (currentKey) => {
    let activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
      activeButton.classList.add('pressed');
      setTimeout(function () {
        activeButton.classList.remove('pressed');
      }, 100);
    }
  };  

  return (
    <div className="game container">
      <p className="drumkit-title">
        Drum Kit
      </p>
      <div className="set">
        <button className="w drum" onClick={handleClick}>
          w
        </button>
        <button className="a drum" onClick={handleClick}>
          a
        </button>
        <button className="s drum" onClick={handleClick}>
          s
        </button>
        <button className="d drum" onClick={handleClick}>
          d
        </button>
        <button className="j drum" onClick={handleClick}>
          j
        </button>
        <button className="k drum" onClick={handleClick}>
          k
        </button>
        <button className="l drum" onClick={handleClick}>
          l
        </button>
      </div>
    </div>
  );
}

export default Game;