
export const postUser = data => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data,
    })
)

export const postSession = data => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data,
    })
)

export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)

