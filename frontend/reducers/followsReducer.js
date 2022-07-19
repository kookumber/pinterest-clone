import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW } from "../actions/followActions";

const followsReducer = (state = {}, action) => {

    Object.freeze(state)

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows
        case RECEIVE_FOLLOW:
            newState[action.follow.id] = action.follow
            return newState
        case REMOVE_FOLLOW:
            delete newState[action.follow.id]
            return newState
        default:
            return state
    }
}

export default followsReducer