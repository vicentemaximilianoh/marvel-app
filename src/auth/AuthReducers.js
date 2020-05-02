
import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from '../auth/authActions';

const INITIAL_STATE = {
    isAuthenticated: true,
    user: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            state = {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
            break;
        case AUTH_LOGOUT:
            state = {
                ...state,
                isAuthenticated: false,
                user: {}
            };
            break;
        default:
            console.error(`${action.type} is not a valid action.`);
            break;
    };
    return state;
}

export default authReducer;
