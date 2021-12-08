import logo from './logo.svg';
import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; 
import Home from './Home';
import Players from './views/Players/Players';
import PlayerDetails from './views/Players/PlayerDetails';
import Teams from './views/Teams/Teams';
import TeamDetails from './views/Teams/TeamDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/teams'>Teams</NavLink>
          <NavLink to='/players'>Players</NavLink>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/teams'>
            <Teams />
          </Route>
          <Route
            exact path='/teams/:id' >
            <TeamDetails />
          </Route>
          <Route exact path='/players' >
            <Players />
          </Route>
          <Route exact path='/players/:id' >
            <PlayerDetails/>
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
