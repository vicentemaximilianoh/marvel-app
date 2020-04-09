import {
  CHARACTERS_FETCH_REQUEST,
  CHARACTERS_FETCH_SUCCESS,
  CHARACTERS_FETCH_FAILURE,
  CHARACTERS_FETCH_DONE,
  CHARACTERS_SET_PAGE
} from "./characterActions";

const INITIAL_STATE = {
  loading: false,
  results: [],
  limit: 0,
  total: 0,
  error: null,
  page: 1
};

const charactersReducer = (state = INITIAL_STATE, action) => {
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
        results: action.payload.results,
        limit: action.payload.limit,
        total: action.payload.total,
        error: null
      };
      break;
    case CHARACTERS_FETCH_FAILURE:
      state = {
        ...state,
        error: action.payload
      };
      break;
    case CHARACTERS_FETCH_DONE:
      state = {
        ...state,
        loading: false
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
