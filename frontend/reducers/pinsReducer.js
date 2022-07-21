import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pinActions";
import { RECEIVE_USER } from "../actions/userActions";

const pinsReducer = (state = {}, action) => {

    Object.freeze(state)
    
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case RECEIVE_USER:
            let pins = Object.values(action.payload.board_pins)
            if (pins) { 
                pins.map(pin => { 
                    newState[pin.id] = pin
                 })
                 return newState
            } else {
                return state
            }
        case RECEIVE_PIN:
            newState[action.pin.id] = action.pin;
            return newState;
        default:
            return state;
    }
}

export default pinsReducer