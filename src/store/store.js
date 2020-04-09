import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import characters from "../characters/characterReducer";
import comics from "../comic/comicReducer";
import series from "../series/seriesReducer";

const reducers = combineReducers({
  characters,
  comics,
  series
});

const middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()));

const store = createStore(reducers, {}, middleware);

export default store;
