export const fetchUser = userId => {
    // debugger
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
};

export const fetchUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET'
    })
)