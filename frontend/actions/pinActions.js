import * as pinApiUtil from "../util/pinApiUtil";

export const RECEIVE_PINS = 'RECEIVE_PINS'
export const RECEIVE_PIN = 'RECEIVE_PIN'
export const REMOVE_PIN = 'REMOVE_PIN'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
})

export const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
})

export const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
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

export const createPin = pin => dispatch => {
    return (
        pinApiUtil.createPin(pin)
            .then(pin => dispatch(receivePin(pin)))
    )
}

// export const deletePin = pinId => dispatch => deletePin(pinId)
//         .then(pin => dispatch(removePin(pin)))