import { RECEIVE_BOARD, RECEIVE_BOARDS, REMOVE_BOARD } from "../actions/boardActions";
import { RECEIVE_USER } from "../actions/userActions";

const boardReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BOARD:
            if (action.payload.board) {
                newState[action.payload.board.id] = action.payload.board
                return newState;
            } else {
                const boardArr = Object.values(action.payload.boards)
                newState[boardArr[boardArr.length - 1].id] = boardArr[boardArr.length - 1]
                return newState;
            }
        case RECEIVE_BOARDS:
            return action.boards
        case RECEIVE_USER:
            if (action.payload.boards) {
                return action.payload.boards
            } else {
                return state
            }
        case REMOVE_BOARD:
            delete newState[action.board.id]
            return newState;
        default:
            return state;
    }
}

export default boardReducer;