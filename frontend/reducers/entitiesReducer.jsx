import { combineReducers } from "redux";

import userReducer from "./userReducer";
import pinsReducer from "./pinsReducer";
import boardReducer from "./boardReducer";
import followsReducer from "./followsReducer";
import savedPinReducer from "./savedPinReducer";


const entitiesReducer = combineReducers({
    users: userReducer,
    pins: pinsReducer,
    boards: boardReducer,
    savedPins: savedPinReducer,
    follows: followsReducer
});

export default entitiesReducer;