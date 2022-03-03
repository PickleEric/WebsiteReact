import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews"

function App() {
  return (
    <main className="text-gold-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Reviews />
      <Contact />
    </main>
  );
}

export default App;
