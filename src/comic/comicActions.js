import ComicsApi from "./comicApi";

export const COMICS_FETCH_REQUEST = "COMICS_FETCH_REQUEST";
export const COMICS_FETCH_SUCCESS = "COMICS_FETCH_SUCCESS";
export const COMICS_FETCH_FAILURE = "COMICS_FETCH_FAILURE";
export const COMICS_FETCH_DONE = "COMICS_FETCH_DONE";
export const COMICS_SET_PAGE = "COMICS_SET_PAGE";

function comicsFetchRequest() {
  return {
    type: COMICS_FETCH_REQUEST
  };
}

function comicsFetchSuccess(data) {
  return {
    type: COMICS_FETCH_SUCCESS,
    payload: data
  };
}

function comicsFetchFailure(error) {
  return {
    type: COMICS_FETCH_FAILURE,
    payload: error
  };
}

function comicsFetchDone() {
  return {
    type: COMICS_FETCH_DONE
  }
}

export function setPage(page) {
  return {
    type: COMICS_SET_PAGE,
    payload: page
  };
}

export function fetchComics(page) {
  return dispatch => {
    dispatch(comicsFetchRequest);

    ComicsApi.getData({ page })
      .then(response => { dispatch(comicsFetchSuccess(response.data)); })
      .catch(error => { dispatch(comicsFetchFailure(error.message)); })
      .finally(() => { dispatch(comicsFetchDone()); });
  };
}
