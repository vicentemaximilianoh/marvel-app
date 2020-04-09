import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Characters from "./characters/Characters";
import Comics from "./comic/Comics";
import Series from './series/Series';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
