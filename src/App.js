import React from "react";
import Intro from "./components/Intro"
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';

export default function App() {
  return (
    <div className="App">
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
    </div>
  );
}


