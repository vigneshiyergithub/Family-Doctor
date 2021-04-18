import React from 'react';
import './App.css';
import About from './components/About/About';
import Call from './components/Call/Call';
import Credentials from './components/Credentials/Credentials';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      <Hero />
      <Call />
      <Services />
      <About />
      <Credentials />
      <Video />
      <Team />
    </div>
  );
}

export default App;
