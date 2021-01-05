import React from 'react';
import logo from './logo.svg';
import Button from './components/button';
import Users from './components/users';
import Data from './privatbank/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Moment from 'react-moment';
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() { //описание компонента
  let title = 'Hello World';
  return (
    <Router>
      <Switch>
        <Route path={'/time'}>
        <Moment interval={1000} format="DD.MM.YYYY HH:mm:ss"></Moment>
        </Route>
        <Route path={'/about'}>
        <h3>Hello World! <Link to={'/'}>Go to main page</Link></h3> 
        </Route>
        <Route path={'/'}>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {title}
          <Button /> 
          <Users />
          <Data />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
