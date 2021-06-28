import React from 'react';
import  './App.scss';
import {Route, Switch} from 'react-router-dom';
import CalcBackground from './components/Calculator/CalcBackground/CalcBackground';
import Nav from './components/Nav/Nav';
import Keyboard from './components/Keyboard/Keyboard';
import GitHubCard from './components/GitHubCard/GitHubCard';
import TicTacToe from './components/TicTacToe/TicTacToe';
import MemoryGame from './components/MemoryGame/MemoryGame';
import { GameSettingsForm } from './components/MemoryGame/GameSettingsForm';
import { GameProvider } from './components/MemoryGame/MemoryGameReducer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/calculator' render={() => <CalcBackground/>}/>
        <Route path='/keyboard' render={() => <Keyboard/>}/>
        <Route path='/GitHub-card' render={() => <GitHubCard/>}/>
        <Route path='/Tic-tac-toe' render={() => <TicTacToe/>}/>
        <GameProvider>
          <Route path='/Memory-game/new-game' render={() => <GameSettingsForm/>}/>  
          <Route path='/Memory-game' exact component={ MemoryGame }/>
        </GameProvider>
      </Switch>
    </div>
  );
}

export default App;
