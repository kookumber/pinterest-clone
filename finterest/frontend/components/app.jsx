import React from "react";
import NavLinksContainer from "./nav/navLinksContainer";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import LoginFormContainer from "./sessionForm/loginFormContainer";
import SignupFormContainer from "./sessionForm/signupFormContainer";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";

const App = () => (
    <div>
        <Modal />
        <header>
            <NavLinksContainer />
        </header>

        {/* <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch> */}
        
    </div>
)

export default App