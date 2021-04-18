import React from 'react';
import './App.css';
import About from './components/About/About';
import Call from './components/Call/Call';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <Call />
      <Services />
      <About />
    </div>
  );
}

export default App;
