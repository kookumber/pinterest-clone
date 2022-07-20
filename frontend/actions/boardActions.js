import * as boardApiUtil from "../util/boardApiUtil";

export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'
export const REMOVE_BOARD = 'REMOVE_BOARD'

export const receiveBoards = (boards) => ({
    type: RECEIVE_BOARDS,
    boards
})

export const receiveBoard = (board) => ({
    type: RECEIVE_BOARD,
    board
})

export const removeBoard = (board) => ({
    type: REMOVE_BOARD,
    board
})

// thunk actions below for CRUD

export const createBoard = (board) => dispatch => {
    return boardApiUtil.createBoard(board)
        .then(newBoard => dispatch(receiveBoard(newBoard)))
}

export const fetchBoards = () => dispatch => {
    return boardApiUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)))
}

export const fetchBoard = (boardId) => dispatch => {
    return boardApiUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)))
}

export const fetchUsersBoards = (userId) => dispatch => {
    return boardApiUtil.fetchUsersBoards(userId)
        .then(boards => dispatch(receiveBoards(boards)))
}


export const updateBoard = (board) => dispatch => {
    return boardApiUtil.updateBoard(board)
        .then(updatedBoard => dispatch(receiveBoard(updatedBoard)))
}

export const deleteBoard = (board) => dispatch => {
    return boardApiUtil.deleteBoard(board)
        .then(() => dispatch(removeBoard(board)))
}