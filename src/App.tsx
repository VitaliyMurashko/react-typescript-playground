import React from 'react';
import  './App.scss';
import {Route, Switch} from 'react-router-dom';
import CalcBackground from './components/Calculator/CalcBackground/CalcBackground';
import Nav from './components/Nav/Nav';
import NameSearch from './components/NameSearch/NameSearch';
import GitHubCard from './components/GitHubCard/GitHubCard';
import TicTacToe from './components/TicTacToe/TicTacToe'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/calculator' render={() => <CalcBackground/>}/>
        <Route path='/name-search' render={() => <NameSearch/>}/>
        <Route path='/GitHub-card' render={() => <GitHubCard/>}/>
        <Route path='/Tic-tac-toe' render={() => <TicTacToe/>}/>
      </Switch>
    </div>
  );
}

export default App;
