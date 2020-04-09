import React from 'react';
import  './App.scss';
import './components/calculator/Calculator'
import Calculator from './components/calculator/Calculator';
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Nav/>
    </div>
  );
}

export default App;
