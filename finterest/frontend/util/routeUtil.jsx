import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


// Below Auth code is to make sure users can't visit our '/login' or '/signup'
// routes if they're already logged in on the front end
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path}
        eact={exact}
        render={(props) => (
            !loggedIn ? (<Component {...props}/>) : (<Redirect to="/" />)
        )} />
);

// This Protected code is to make sure a user can't create new pins or boards or do any
// functionality unless they're a signed in user
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={(props) => (
            loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
        )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

// We use AuthRoute in our App file for the login and signup routes
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))