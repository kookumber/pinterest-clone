import { RECEIVE_SAVED_PINS, REMOVE_SAVED_PIN } from "../actions/savedPinActions"

const savedPinReducer = (state = {}, action) => {
    
    Object.freeze(state)
    
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SAVED_PINS:
            return action.savedPins;
        case REMOVE_SAVED_PIN:
            delete newState[action.savedPin.id];
            return newState;
        default:
            return state;
    }
}

export default savedPinReducer
