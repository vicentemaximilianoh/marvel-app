import {
    SERIES_FETCH_REQUEST,
    SERIES_FETCH_SUCCESS,
    SERIES_FETCH_FAILURE,
    SERIES_FETCH_DONE,
    SERIES_SET_PAGE
  } from "./serieActions";
  
  const INITIAL_STATE = {
    loading: false,
    results: [],
    limit: 0,
    total: 0,
    error: null,
    page: 1
  };
  
  const seriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SERIES_FETCH_REQUEST:
        state = {
          ...state,
          loading: true
        };
        break;
      case SERIES_FETCH_SUCCESS:
        state = {
          ...state,
          results: action.payload.results,
          limit: action.payload.results,
          total: action.payload.total,
          error: null
        };
        break;
      case SERIES_FETCH_FAILURE:
        state = {
          ...state,
          results: [],
          limit: 0,
          total: 0,
          error: action.payload
        };
        break;
      case SERIES_FETCH_DONE:
        state = {
          ...state,
          loading: false
        }
        break;
      case SERIES_SET_PAGE:
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
  
  export default seriesReducer;
  