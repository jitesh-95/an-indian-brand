import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import { menReducer } from "./appReducer/menReducer/menReducer";
import { womenReducer } from "./appReducer/womenReducer/womenReducer";
import { kidsReducer } from "./appReducer/kidsReducer/kidsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  authReducer,
  menReducer,
  womenReducer,
  kidsReducer,
});

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
