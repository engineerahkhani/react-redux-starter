import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import Counter from '../counter/reducer';

const store = createStore(combineReducers({Counter}), {}, composeWithDevTools(
    applyMiddleware(promise(), thunk, logger)
));

export  default store;