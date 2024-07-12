import './App.css';
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const name = "Marin Philippe";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function ProjExp() {
  return <h2>Projects</h2>;
}

function Team (){
  return <h2>Team</h2>
}
function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <h1>{name} Portfolio</h1>
        </header>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/team">Team</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/*" element={<ProjExp />} />
            <Route path="/team" element={<Team/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
