
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'; 
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
          <Route exact path='/'
            component={Home}/>
          <Route exact path='/teams' render={(routeProps) => <Teams {...routeProps} />}/>
          <Route
            exact path='/teams/:id'
            component={TeamDetails}/>
          <Route exact path='/players' 
            component={Players }/>
          <Route exact path='/players/:id' 
            component={PlayerDetails}/>
      

          </Switch>
      </Router>
    </div>
  );
}

export default App;
