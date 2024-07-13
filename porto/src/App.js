import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
