import React from 'react';
import './App.css';
import About from './components/About/About';
import Call from './components/Call/Call';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoogleMap from './components/Google/GoogleMap';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import FAQs from './components/FAQs/FAQs';
import HelpServices from './components/Services Help/Help';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Hero />
      <Call />
      <HelpServices />
      <Services />
      <About />
      {/* <Credentials /> */}
      {/* <Video /> */}
      <Team />
      {/* <Partners /> */}
      {/* <Slideshow /> */}
      <FAQs />
      <GoogleMap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
