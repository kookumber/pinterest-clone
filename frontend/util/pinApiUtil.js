
export const fetchPins = () => {
    return $.ajax({
            url: '/api/pins',
            method: 'GET'
        })
}

export const fetchPin = pinId => {
    return $.ajax({
            url: `/api/pins/${pinId}`,
            method: 'GET'
        })
}


export const createPin = pin => {
    return $.ajax({
            url: '/api/pins',
            method: 'POST',
            data: {pin}
        })
}

export const deletePin = pinId => {
    $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'DELETE'
    })
}