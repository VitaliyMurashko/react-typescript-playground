import React from 'react';
import  './App.scss';
import {Route, Switch} from 'react-router-dom';
import CalcBackground from './components/Calculator/CalcBackground/CalcBackground';
import Nav from './components/Nav/Nav';
import Tests from './components/Tests/Tests';
import GitHubCard from './components/GitHubCard/GitHubCard';
import TicTacToe from './components/TicTacToe/TicTacToe'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/calculator' render={() => <CalcBackground/>}/>
        {/* <Route path='/tests' render={() => <Tests/>}/> */}
        <Route path='/GitHub-card' render={() => <GitHubCard/>}/>
        <Route path='/Tic-tac-toe' render={() => <TicTacToe/>}/>
      </Switch>
    </div>
  );
}

export default App;
