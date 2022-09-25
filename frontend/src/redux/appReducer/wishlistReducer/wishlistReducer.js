import {
  ADD_USER_WISHLIST_PRODUCTS_FAILURE,
  ADD_USER_WISHLIST_PRODUCTS_REQUEST,
  ADD_USER_WISHLIST_PRODUCTS_SUCCESS,
  DELETE_USER_WISHLIST_PRODUCTS_FAILURE,
  DELETE_USER_WISHLIST_PRODUCTS_REQUEST,
  DELETE_USER_WISHLIST_PRODUCTS_SUCCESS,
  GET_USER_WISHLIST_PRODUCTS_FAILURE,
  GET_USER_WISHLIST_PRODUCTS_REQUEST,
  GET_USER_WISHLIST_PRODUCTS_SUCCESS,
} from "./wishlistAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  wishlistProducts: [],
  totalQuantity: 0,
};

export const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_WISHLIST_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_WISHLIST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        wishlistProducts: payload.wishlistProducts,
        totalQuantity: payload.wishlistProducts.length,
      };
    }
    case GET_USER_WISHLIST_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case ADD_USER_WISHLIST_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADD_USER_WISHLIST_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADD_USER_WISHLIST_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_USER_WISHLIST_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_USER_WISHLIST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        wishlistProducts: payload.wishlistProducts,
      };
    }
    case DELETE_USER_WISHLIST_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
