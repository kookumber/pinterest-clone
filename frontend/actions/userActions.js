import * as userApiUtil from "../util/userApiUtil";

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIEVE_USERS'

export const receiveUser = (payload) => {
    // debugger
    return {
    type: RECEIVE_USER,
    payload
    }
}

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
}) 



export const fetchUser = (userId) => dispatch => {
    return userApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

// Not going to have a page that displays all users, just grab all users so we can key into them
export const fetchUsers = () => dispatch => {
    return userApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
}