
import AuthApi from './authApi';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_LOGIN_DONE = 'AUTH_LOGIN_DONE';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILURE = 'AUTH_LOGOUT_FAILURE';
export const AUTH_LOGOUT_DONE = 'AUTH_LOGOUT_DONE';

/**
 * ===================================
 * LOGIN
 * ===================================
 */
function authLoginRequest() {
    return {
        type: AUTH_LOGIN_REQUEST
    }
}

function authLoginSuccess(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: user
    }
}

function authLoginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    }
}

function authLoginDone() {
    return {
        type: AUTH_LOGIN_DONE
    }
}

export function authLogin(user) {
    return dispatch => {
        dispatch(authLoginRequest());

        AuthApi.login(user)
            .then((user) => { 
                localStorage.setItem('jwt_key', JSON.stringify(user));
                dispatch(authLoginSuccess(user)) 
            })
            .catch(() => { dispatch(authLoginFailure()) })
            .finally(() => { dispatch(authLoginDone()) })
    }
}


/**
 * ===================================
 * LOGOUT
 * ===================================
 */
function authLogoutRequest() {
    return {
        type: AUTH_LOGOUT_SUCCESS
    }
}

function authLogoutSuccess(user) {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        payload: user
    }
}

function authLogoutFailure() {
    return {
        type: AUTH_LOGOUT_FAILURE
    }
}

function authLogoutDone() {
    return {
        type: AUTH_LOGIN_FAILURE
    }
}

export function authLogout() {
    return dispatch => {
        dispatch(authLogoutRequest());

        AuthApi.logout()
            .then((user) => { 
                localStorage.removeItem('jwt_key');
                dispatch(authLogoutSuccess(user)) 
            })
            .catch(() => { dispatch(authLogoutFailure()) })
            .catch(() => { dispatch(authLogoutDone()) })
    }
}
