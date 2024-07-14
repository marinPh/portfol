import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
        
        </Routes>
    </div>
  );
}

export default App;
