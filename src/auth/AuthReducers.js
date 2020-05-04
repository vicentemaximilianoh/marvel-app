
import {
    AUTH_LOGIN_DONE,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT_DONE,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGOUT_REQUEST,
    AUTH_LOGOUT_SUCCESS
} from '../auth/authActions';

const INITIAL_STATE = {
    isAuthenticated: !!localStorage.getItem('jwt_key'),
    user: JSON.parse(localStorage.getItem('jwt_key')),
    processing: false
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            state = {
                ...state,
                processing: true
            }
            break;
        case AUTH_LOGIN_SUCCESS:
            state = {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
            break;
        case AUTH_LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break;
        case AUTH_LOGIN_DONE:
            state = {
                ...state,
                processing: false
            };
            break;
        case AUTH_LOGOUT_REQUEST:
            state = {
                ...state,
                processing: true
            }
            break;
        case AUTH_LOGOUT_SUCCESS:
            state = {
                ...state,
                isAuthenticated: false,
                user: {}
            };
            break;
        case AUTH_LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break;
        case AUTH_LOGOUT_DONE:
            state = {
                ...state,
                processing: false
            };
            break;
        default:
            // console.error(`${action.type} is not a valid action.`);
            break;
    };
    return state;
}

export default authReducer;
