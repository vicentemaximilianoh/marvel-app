

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export function loginUser(user) {
    return {
        type: AUTH_LOGIN,
        payload: user
    }
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    }
}
