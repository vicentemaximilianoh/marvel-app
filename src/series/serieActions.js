import SeriesApi from "./serieApi";

export const SERIES_FETCH_REQUEST = "SERIES_FETCH_REQUEST";
export const SERIES_FETCH_SUCCESS = "SERIES_FETCH_SUCCESS";
export const SERIES_FETCH_FAILURE = "SERIES_FETCH_FAILURE";
export const SERIES_FETCH_DONE = "SERIES_FETCH_DONE";
export const SERIES_SET_PAGE = "SERIES_SET_PAGE";

function seriesFetchRequest() {
  return {
    type: SERIES_FETCH_REQUEST,
    loading: true
  };
}

function seriesFetchSuccess(data) {
  return {
    type: SERIES_FETCH_SUCCESS,
    payload: data,
    loading: false
  };
}

function seriesFetchFailure(error) {
  return {
    type: SERIES_FETCH_FAILURE,
    payload: error,
    loading: false
  };
}

function seriesFetchDone() {
  return {
    type: SERIES_FETCH_DONE
  }
}

export function setPage(page) {
  return {
    type: SERIES_SET_PAGE,
    payload: page
  };
}

export function fetchSeries(page) {
  return dispatch => {
    dispatch(seriesFetchRequest);

    SeriesApi.getData({ page })
      .then(response => { dispatch(seriesFetchSuccess(response.data)); })
      .catch(error => { dispatch(seriesFetchFailure(error.message)); })
      .finally(() => { dispatch(seriesFetchDone()); });
  };
}
