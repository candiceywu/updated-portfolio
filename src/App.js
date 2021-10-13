import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
// import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
