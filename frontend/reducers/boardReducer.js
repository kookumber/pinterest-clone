import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from "../actions/boardActions";

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BOARD:
            newState[action.board.id] = action.board
            return newState;
        case RECEIVE_BOARDS:
            return action.boards
        case REMOVE_BOARD:
            delete newState[action.board.id]
            return newState;
        default:
            return state;
    }
}

export default boardsReducer;