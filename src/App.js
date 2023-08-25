import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
    <HashRouter basename='/'>
      <Header />
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/about' element={<About />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/rockpaperscissor' element={<RockPaperScissor />} />
          <Route path='/drumkit' element={<DrumKit />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
