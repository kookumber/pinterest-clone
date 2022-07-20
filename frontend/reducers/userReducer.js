import { RECEIVE_CURRENT_USER } from "../actions/sessionActions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/userActions";

const userReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState;
            case RECEIVE_USER:
                console.log(action)
                // debugger
            newState[action.payload.user.id] = action.payload.user
            return newState;
            // return action.payload
        case RECEIVE_USERS:
            return action.users
        default:
            return state;
    }
}

export default userReducer