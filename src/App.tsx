import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Characters from "./characters/Characters";
import Comics from "./comic/Comics";
import Series from './series/Series';
import Login from "./login/Login";

import "./App.scss";
import { connect } from "react-redux";
import { authLogout } from "./auth/authActions";

import PrivateRoute from './auth/PrivateRoute';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MvlLoader from "./components/mvl-loader/MvlLoader";

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
      <PrivateRoute path="/" component={Characters} authed={isAuthenticated} />
      <PrivateRoute path="/series" component={Series} authed={isAuthenticated} />
      <PrivateRoute path="/comics" component={Comics} authed={isAuthenticated} />
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
    </div>
  ) : (
      <Login />
  );

  return (
    <Router>
      <div className="App">
        <MvlLoader/>
        {nav}
      </div>
    </Router>
  );
}

const mapPropsToState = (state: any) => {
  const stateAuth = state.auth;
  return {
    isAuthenticated: stateAuth.isAuthenticated,
    user: stateAuth.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser: () => dispatch(authLogout())
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(App);
