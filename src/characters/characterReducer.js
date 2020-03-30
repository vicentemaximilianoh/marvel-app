import {
  CHARACTERS_FETCH_REQUEST,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_FAILURE,
  CHARACTERS_SET_PAGE
} from "./characterActions";

const initialState = {
  loading: false,
  data: [],
  error: null,
  page: 1
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_FETCH_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case CHARACTERS_FETCH_SUCCESS:
      state = {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
      break;
    case CHARACTERS_FETCH_FAILURE:
      state = {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
      break;
    case CHARACTERS_SET_PAGE:
      state = {
        ...state,
        page: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default charactersReducer;
