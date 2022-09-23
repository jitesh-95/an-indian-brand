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
import { cartReducer } from "./appReducer/cartReducer/cartReducer";
import { orderReducer } from "./appReducer/ordersReducer/ordersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  authReducer,
  menReducer,
  womenReducer,
  kidsReducer,
  cartReducer,
  orderReducer,
});

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
