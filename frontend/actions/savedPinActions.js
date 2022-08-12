import * as savedPinApiUtil from "../util/savedPinApitUtil";

export const RECEIVE_SAVED_PINS = 'RECEIVE_SAVED_PINS'
export const RECEIVE_SAVED_PIN = 'RECEIVE_SAVED_PIN'
export const REMOVE_SAVED_PIN = 'REMOVE_SAVED_PIN'

export const receiveSavedPins = (savedPins) => ({
    type: RECEIVE_SAVED_PINS,
    savedPins
})

export const receiveSavedPin = (savedPin) => ({
    type: RECEIVE_SAVED_PIN,
    savedPin
})

export const removeSavedPin = (savedPinId) => ({
    type: REMOVE_SAVED_PIN,
    savedPinId
})

export const fetchSavedPins = () => dispatch => {
    return savedPinApiUtil.fetchSavedPins()
        .then(savedPins => dispatch(receiveSavedPins(savedPins)))
}

export const createSavedPin = (savedPin) => dispatch => {
    return savedPinApiUtil.createSavedPin(savedPin)
        .then(pin => dispatch(receiveSavedPin(pin)))
}

export const deleteSavedPin = (savedPinId) => dispatch => {
    return savedPinApiUtil.deleteSavedPin(savedPinId)
        .then(() => dispatch(removeSavedPin(savedPinId)))
}

