import React from 'react';
import  './App.scss';
import './components/calculator/Calculator'
import Calculator from './components/calculator/Calculator';
import Nav from './components/nav/Nav';
import NameSearch from './components/NameSearch/NameSearch'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Calculator/> */}
      <NameSearch/>
    </div>
  );
}

export default App;
