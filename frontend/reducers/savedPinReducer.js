import { RECEIVE_SAVED_PINS, RECEIVE_SAVED_PIN, REMOVE_SAVED_PIN } from "../actions/savedPinActions"

const savedPinReducer = (state = {}, action) => {
    
    Object.freeze(state)
    
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SAVED_PINS:
            return action.savedPins;
        case RECEIVE_SAVED_PIN:
            newState[action.savedPin.id] = action.savedPin
            return newState
        case REMOVE_SAVED_PIN:
            delete newState[action.savedPinId];
            return newState;
        default:
            return state;
    }
}

export default savedPinReducer
