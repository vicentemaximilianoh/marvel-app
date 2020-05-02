
import React, { FormEvent } from "react";
import { connect } from "react-redux";

import { loginUser } from "../auth/authActions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

import './Login.scss';

function Login({authUser}: any) {

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target: any = event.target;

        authUser({
            username: target.username.value,
            password: target.password.value
        });
    }

    return (
        <Container className="Login" fluid="sm">
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
            </Form>
        </Container>
    );
}

const mapPropsToState = (state: any) => {
    state = state.auth;
    return {
        isAuthenticated: state.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        authUser: (user: {}) => dispatch(loginUser(user)) 
    };
}

export default connect(
    mapPropsToState,
    mapDispatchToProps
)(Login);
