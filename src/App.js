import React from 'react';
import './App.css';
import About from './components/About/About';
import Call from './components/Call/Call';
import Contact from './components/Contact/Contact';
import Credentials from './components/Credentials/Credentials';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import GoogleMap from './components/Google/GoogleMap';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import Slideshow from './components/Slideshow/Slideshow';
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
      <Partners />
      <Slideshow />
      <FAQs />
      <GoogleMap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
