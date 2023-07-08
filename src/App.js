import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
