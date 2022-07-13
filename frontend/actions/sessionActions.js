import { postSession, deleteSession, postUser } from "../util/sessionApiUtil"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
})

export const removeErrors = (errors) => ({
    type: CLEAR_SESSION_ERRORS
})

export const signup = formUser => dispatch => postUser(formUser)
            .then(user => dispatch(receiveCurrentUser(user))
            ,err => (dispatch(receiveErrors(err.responseJSON))
            )
            )

export const login = formUser => dispatch => postSession(formUser)
            .then(user => dispatch(receiveCurrentUser(user))
            , err => dispatch(receiveErrors(err.responseJSON))
            )

export const logout = () => dispatch => deleteSession()
        .then(() => dispatch(logoutCurrentUser()))