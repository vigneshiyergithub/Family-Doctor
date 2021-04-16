import React from 'react';
import './App.css';
import Call from './components/Call/Call';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <Call />
      <Services />
    </div>
  );
}

export default App;
