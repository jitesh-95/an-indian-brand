import {
  ADD_USER_PRODUCTS_FAILURE,
  ADD_USER_PRODUCTS_REQUEST,
  ADD_USER_PRODUCTS_SUCCESS,
  DELETE_USER_PRODUCTS_FAILURE,
  DELETE_USER_PRODUCTS_REQUEST,
  DELETE_USER_PRODUCTS_SUCCESS,
  EMPTY_USER_PRODUCTS_FAILURE,
  EMPTY_USER_PRODUCTS_REQUEST,
  EMPTY_USER_PRODUCTS_SUCCESS,
  GET_USER_PRODUCTS_FAILURE,
  GET_USER_PRODUCTS_REQUEST,
  GET_USER_PRODUCTS_SUCCESS,
} from "./cartAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  cartProducts: [],
  cartTotal: 0,
  totalQuantity: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_PRODUCTS_SUCCESS: {
      let sum = 0;
      let quant = 0;
      if (payload.cartProducts.length > 0) {
        sum += payload.cartProducts
          .map((item) => item.price * item.quantity)
          .reduce((a, b) => a + b, 0);

        quant += payload.cartProducts
          .map((item) => item.quantity)
          .reduce((a, b) => a + b, 0);
      }
      return {
        ...state,
        isLoading: false,
        cartProducts: payload.cartProducts,
        cartTotal: sum,
        totalQuantity: quant,
      };
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
    case DELETE_USER_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_USER_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, cartProducts: payload.newProducts };
    }
    case DELETE_USER_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case EMPTY_USER_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case EMPTY_USER_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, cartProducts: [] };
    }
    case EMPTY_USER_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
