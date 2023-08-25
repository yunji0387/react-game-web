import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import About from './pages/About';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import TicTacToe from './games/tictactoe'
import RockPaperScissor from './games/rockpaperscissors'
import DrumKit from './games/drumkit';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path='/react-game-web' element={<Home />} />
          <Route path='/react-game-web/forum' element={<Forum />} />
          <Route path='/react-game-web/About' element={<About />} />
          <Route path='/react-game-web/tictactoe' element={<TicTacToe />} />
          <Route path='/react-game-web/rockpaperscissor' element={<RockPaperScissor />} />
          <Route path='/react-game-web/drumkit' element={<DrumKit />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
