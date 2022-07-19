import * as followApiUtil from "../util/followApiUtil";

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS'
export const RECEIVE_FOLLOW = 'RECEIEE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

export const receiveFollows = (follows) => ({
    type: RECEIVE_FOLLOWS,
    follows
})

export const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
})

export const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId
})

export const fetchFollows = () => dispatch => {
    return followApiUtil.fetchFollows()
        .then(follows => dispatch(receiveFollows(follows)))
}

export const fetchFollow = (follow) => dispatch => {
    return followApiUtil.fetchFollow(follow)
        .then(followEle => dispatch(receiveFollow(followEle)))
}

export const createFollow = (follow) => dispatch => {
    return followApiUtil.createFollow(follow)
        .then(newFollow => dispatch(receiveFollow(newFollow)))
}

export const deleteFollow = (followId) => dispatch => {
    return followApiUtil.deleteFollow(followId)
        .then(follow => dispatch(removeFollow(follow)))
}    