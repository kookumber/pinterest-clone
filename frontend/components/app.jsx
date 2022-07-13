import React from "react";
import NavLinksContainer from "./nav/navLinksContainer";
import { Route, Switch } from "react-router-dom";

import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import PinIndexContainer from "./pin/pinIndexContainer";

const App = () => (
    <div>
        <Modal />
        <header>
            <NavLinksContainer />
        </header>

        <PinIndexContainer />        
        
    </div>
)

export default App