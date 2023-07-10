import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import GameCardList from './partials/GameCardList';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <GameCardList />
      <Footer />
    </div>
  );
}

export default App;
