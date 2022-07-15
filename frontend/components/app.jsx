import React from "react";
import NavLinksContainer from "./nav/navLinksContainer";
import { Route, Switch } from "react-router-dom";

import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import PinIndexContainer from "./pin/pinIndexContainer";
import PinFormContainer from "./pin/pinFormContainer";
import UserShowContainer from "./user/userShowContainer";

const App = () => (
    <div className="main-wrapper">
        <Modal />
        <header>
            <NavLinksContainer />
        </header>

        <Route exact path="/" component={PinIndexContainer}/>
        
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
        <ProtectedRoute path="/pins/create" component={PinFormContainer} />
        
        
    </div>
)

export default App