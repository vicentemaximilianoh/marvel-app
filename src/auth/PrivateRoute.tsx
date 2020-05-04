
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({authed, component: Component, ...rest}: any) => {
    return (
        <Route {...rest} render={(props) => (
            authed ? 
                <Component {...props} /> : 
                <Redirect to="/login"/>
        )} />
    );
}

export default PrivateRoute;