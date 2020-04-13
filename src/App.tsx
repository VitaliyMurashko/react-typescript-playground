import React from 'react';
import  './App.scss';
import {Route, Switch} from 'react-router-dom';
import './components/Calculator/Calculator';
import Calculator from './components/Calculator/Calculator';
import Nav from './components/Nav/Nav';
import NameSearch from './components/NameSearch/NameSearch';
import GitHubCard from './components/GitHubCard/GitHubCard'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/calculator' render={()=><Calculator/>}/>
        <Route path='/name-search' render={() => <NameSearch/>}/>
        <Route path='/GitHub-card' render={() => <GitHubCard/>}/>
      </Switch>
    </div>
  );
}

export default App;
