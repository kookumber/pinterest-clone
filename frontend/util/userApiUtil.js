export const fetchUser = userId => {
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