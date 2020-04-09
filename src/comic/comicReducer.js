import {
    COMICS_FETCH_REQUEST,
    COMICS_FETCH_SUCCESS,
    COMICS_FETCH_FAILURE,
    COMICS_SET_PAGE,
    COMICS_FETCH_DONE
  } from "./comicActions";
  
  const INITIAL_STATE = {
    loading: false,
    results: [],
    limit: 0,
    total: 0,
    error: null,
    page: 1
  };
  
  const comicsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COMICS_FETCH_REQUEST:
        state = {
          ...state,
          loading: true
        };
        break;
      case COMICS_FETCH_SUCCESS:
        state = {
          ...state,
          results: action.payload.results,
          limit: action.payload.limit,
          total: action.payload.total,
          error: null
        };
        break;
      case COMICS_FETCH_FAILURE:
        state = {
          ...state,
          error: action.payload
        };
        break;
        case COMICS_FETCH_DONE:
          state = {
            ...state,
            loading: false
          };
          break;
      case COMICS_SET_PAGE:
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
  
  export default comicsReducer;
  