
import {
    MODAL_SHOW,
    MODAL_HIDE
} from './modalActions';

const INITIAL_STATE = {
    show: false,
    onClose: null,
    // title: '',
    header: null,
    body: null,
    footer: null
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_SHOW:

            state = {
                ...state,
                show: true,
                onClose: action.payload.onClose,
                header: action.payload.header,
                body: action.payload.body,
                footer: action.payload.footer
            }
            break;
        case MODAL_HIDE:

    debugger
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
