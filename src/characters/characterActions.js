import CharactersApi from "./charactersApi";

export const CHARACTERS_FETCH_REQUEST = "CHARACTERS_FETCH_REQUEST";
export const CHARACTERS_FETCH_SUCCESS = "CHARACTERS_FETCH_SUCCESS";
export const CHARACTERS_FETCH_FAILURE = "CHARACTERS_FETCH_FAILURE";
export const CHARACTERS_SET_PAGE = "CHARACTERS_SET_PAGE";

function charactersFetchRequest() {
  return {
    type: CHARACTERS_FETCH_REQUEST,
    loading: true
  };
}

function charactersFetchSuccess(data) {
  return {
    type: CHARACTERS_FETCH_SUCCESS,
    payload: data,
    loading: false
  };
}

function charactersFetchFailure(error) {
  return {
    type: CHARACTERS_FETCH_FAILURE,
    payload: error,
    loading: false
  };
}

export function setPage(page) {
  return {
    type: CHARACTERS_SET_PAGE,
    payload: page
  };
}

export function fetchCharacters(page) {
  return dispatch => {
    dispatch(charactersFetchRequest);

    CharactersApi.getData({ page })
      .then(response => {
        dispatch(charactersFetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(charactersFetchFailure(error.message));
      });
  };
}
