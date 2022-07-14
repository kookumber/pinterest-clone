
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
    console.log("pin ajax", pin)
    return $.ajax({
            url: '/api/pins/',
            method: 'POST',
            data: pin,
            //The 2 lines below let the ajax method know not to fiddle with formData object for rails backend. Leave as is so rails does the work
            contentType: false, 
            processData: false
        })
}

export const deletePin = pinId => {
    $.ajax({
        url: `/api/pins/${pinId}`,
        method: 'DELETE'
    })
}