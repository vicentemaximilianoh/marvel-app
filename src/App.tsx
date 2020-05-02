import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Characters from "./characters/Characters";
import Comics from "./comic/Comics";
import Series from './series/Series';
import Login from "./login/Login";

import "./App.scss";
import { connect } from "react-redux";
import { logout } from "./auth/authActions";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App({isAuthenticated, logoutUser, user}: any) {

  const handleLogout = () => {
    logoutUser();
  }

  const nav = isAuthenticated ? (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Marvel API</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Characters</Link></Nav.Link>
          <Nav.Link><Link to="/comics">Comics</Link></Nav.Link>
          <Nav.Link><Link to="/series">Series</Link></Nav.Link>
        </Nav>

        <Nav>
        <div>Hello {user.username}!</div>
          <Button onClick={handleLogout} variant="primary">Logout</Button>
        </Nav>
      </Navbar.Collapse>


    </Navbar>



      <hr/>

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
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );

  return (
    <Router>
      <div className="App">
        {nav}
      </div>
    </Router>
  );
}

const mapPropsToState = (state: any) => {
  const stateAuth = state.auth;
  console.log('auth', state.auth);
  return {
    isAuthenticated: stateAuth.isAuthenticated,
    user: stateAuth.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser: () => dispatch(logout())
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(App);
