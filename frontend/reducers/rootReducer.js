import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";
import errorsReducer from "./errorsReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
    session: sessionReducer, 
    entities: entitiesReducer, 
    errors: errorsReducer,
    ui: uiReducer})

export default rootReducer

