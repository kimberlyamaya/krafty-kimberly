import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Foot from './components/Foot'

function App() {
  return (
    <div>
        <Nav></Nav>
      <main>
        <About></About>
      </main>
        <Foot></Foot>
    </div>
  );
}

export default App;
