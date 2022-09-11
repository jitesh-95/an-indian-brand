import {
  ADD_USER_PRODUCTS_FAILURE,
  ADD_USER_PRODUCTS_REQUEST,
  ADD_USER_PRODUCTS_SUCCESS,
  GET_USER_PRODUCTS_FAILURE,
  GET_USER_PRODUCTS_REQUEST,
  GET_USER_PRODUCTS_SUCCESS,
} from "./cartAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  cartProducts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, cartProducts: payload.cartProducts };
    }
    case GET_USER_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case ADD_USER_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADD_USER_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADD_USER_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
