import * as userApiUtil from "../util/userApiUtil";

export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = (userId) => dispatch => (
    userApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

