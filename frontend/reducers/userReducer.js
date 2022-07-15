import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import { RECEIVE_USER } from "../actions/userActions";

const userReducer = (state={}, action) => {
    Object.freeze(state)

    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState;
        default:
            return state;
    }
}

export default userReducer