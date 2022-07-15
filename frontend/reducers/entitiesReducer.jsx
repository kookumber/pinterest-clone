import { combineReducers } from "redux";

import usersReducer from "./userReducer";
import pinsReducer from "./pinsReducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    pins: pinsReducer
});

export default entitiesReducer;