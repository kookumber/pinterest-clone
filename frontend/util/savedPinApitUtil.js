export const fetchSavedPins = () => {
    return $.ajax({
        url: '/api/saved_pins',
        method: 'GET'
    })
}

export const createSavedPin = (saved_pin) => {
    return $.ajax({
        url: '/api/saved_pins',
        method: 'POST',
        data: { saved_pin }
    })
}

export const deleteSavedPin = (savedPinId) => {
    return $.ajax({
        url: `/api/saved_pins/${savedPinId}`,
        method: 'DELETE'
    })
}