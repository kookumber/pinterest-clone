import React, { useState } from "react";
import NavLinksContainer from "./nav/navLinksContainer";
import { Route, Switch } from "react-router-dom";

import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import PinFormContainer from "./pin/pinFormContainer";
import UserShowContainer from "./user/userShowContainer";
import PinShowContainer from "./pin/pinShowContainer";
import BoardShowContainer from "./board/boardShowContainer";
import HomePageContainer from "./homePage/homePageContainer";
import SearchIndexContainer from "./searchScroll/searchIndexContainer";


const App = () => (
    <div className="main-wrapper">
        <Modal />
        
        <NavLinksContainer />
        
        {/* <Route exact path="/" component={HomePageContainer}/>

        <Switch>
            <ProtectedRoute path="/pins/create" component={PinFormContainer} />
            <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
            <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
        </Switch> */}
        
        
    </div>
)

export default App