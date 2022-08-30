import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./appActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  mensProducts: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, mensProducts: payload.results };
    }
    case GET_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
