import { CLOSE_MODAL } from "../actions/modalActions";
import { CLEAR_SESSION_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/sessionActions";

const sessionErrorsReducer = (state = {errors: []}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.errors = []
            return newState
        case RECEIVE_ERRORS:
            
            newState.errors = action.errors
            return newState
        case CLEAR_SESSION_ERRORS:
        case CLOSE_MODAL:
            //This case resets errors to empty array when we close the modal
            newState.errors = []
            return newState
        default:
            return state
    }
}

export default sessionErrorsReducer