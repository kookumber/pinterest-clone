
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
            url: '/api/pins/',
            method: 'POST',
            data: pin,
            // The 2 lines below let the ajax method know not to fiddle with formData 
            // object for rails backend. Leave as is so rails does the work
            contentType: false, 
            processData: false
        })
}

export const fetchBoardsPins = boardId => {
    return $.ajax({
        url: `/api/boards/${boardId}/saved_pins`,
        method: 'GET'
    })
}

export const updatePin = pin => {
    return $.ajax({
        url: `/api/pins/${pin.id}`,
        method: 'PATCH',
        data: {pin}
    })
}


export const deletePin = pinId => {
    return $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'DELETE'
    })
}