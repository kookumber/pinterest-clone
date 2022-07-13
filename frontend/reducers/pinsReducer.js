import { RECEIVE_PINS } from "../actions/pinActions";

const pinsReducer = (state = {}, action) => {
    Object.freeze(state)
    // let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins
        // case RECEIVE_PIN:

        default:
            return state;
    }

}

export default pinsReducer