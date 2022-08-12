import * as pinApiUtil from "../util/pinApiUtil";
import * as savedPinApiUtil from "../util/savedPinApitUtil"

export const RECEIVE_PINS = 'RECEIVE_PINS'
export const RECEIVE_PIN = 'RECEIVE_PIN'
export const REMOVE_PIN = 'REMOVE_PIN'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
})

export const receivePin = (payload) => {
    return {
        type: RECEIVE_PIN,
        payload
    }
}

export const removePin = pin => ({
    type: REMOVE_PIN,
    pin
})

export const fetchPins = () => dispatch => {
    return (
        pinApiUtil.fetchPins()
            .then(pins => dispatch(receivePins(pins)))
    )
}

export const fetchPin = pinId => dispatch => {
    return (
        pinApiUtil.fetchPin(pinId)
            .then(pin => dispatch(receivePin(pin)))
    )
}

export const updatePin = pin => dispatch => {
    return pinApiUtil.updatePin(pin)
            .then(updatedPin => dispatch(receivePin(updatedPin)))
    
}

export const createPin = pin => dispatch => {
    return (
        pinApiUtil.createPin(pin)
            .then(res => dispatch(receivePin(res)))
    )
}

export const fetchBoardSavedPins = boardId => dispatch => {
    return (
        pinApiUtil.fetchBoardsPins(boardId)
            .then(pins => dispatch(receivePins(pins)))
    )
}

export const deletePin = pin => dispatch => {
    return pinApiUtil.deletePin(pin)
            .then(() => dispatch(removePin(pin)))
    
}