
import {
    MODAL_SHOW,
    MODAL_HIDE
} from './modalActions';

const INITIAL_STATE = {
    show: false,
    onClose: null,
    title: '',
    body: null,
    actions: null
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_SHOW:

            state = {
                ...state,
                show: true,
                onClose: action.payload.onClose,
                title: action.payload.title,
                body: action.payload.body,
                actions: action.payload.actions
            }
            break;
        case MODAL_HIDE:

            state = {
                ...state,
                ...INITIAL_STATE
            }
            break;
        default:
            // console.error(`${action.type} is not a valid action.`);
            break;
    };
    return state;
}

export default modalReducer;
