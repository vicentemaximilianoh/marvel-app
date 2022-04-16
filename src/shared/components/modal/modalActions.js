

export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

/**
 * ===================================
 * LOGIN
 * ===================================
 */
export function showModal(payload) {
    return {
        type: MODAL_SHOW,
        payload
    }
}

export function hideModal() {
    return {
        type: MODAL_HIDE
    }
}

// export function authLogin(user) {
//     return dispatch => {
//         dispatch(authLoginRequest());

//         AuthApi.login(user)
//             .then((user) => { 
//                 localStorage.setItem('jwt_key', JSON.stringify(user));
//                 dispatch(authLoginSuccess(user)) 
//             })
//             .catch(() => { dispatch(authLoginFailure()) })
//             .finally(() => { dispatch(authLoginDone()) })
//     }
// }

