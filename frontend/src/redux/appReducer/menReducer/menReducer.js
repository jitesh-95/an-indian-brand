import {
  GET_PRODUCTS_FAILURE_MEN,
  GET_PRODUCTS_REQUEST_MEN,
  GET_PRODUCTS_SUCCESS_MEN,
} from "./menAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  menProducts: [],
};

export const menReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST_MEN: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCTS_SUCCESS_MEN: {
      return { ...state, isLoading: false, menProducts: payload.mensProducts };
    }
    case GET_PRODUCTS_FAILURE_MEN: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
