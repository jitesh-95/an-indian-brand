import {
  GET_PRODUCTS_FAILURE_KIDS,
  GET_PRODUCTS_REQUEST_KIDS,
  GET_PRODUCTS_SUCCESS_KIDS,
} from "./kidsAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  kidsProducts: [],
};

export const kidsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST_KIDS: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCTS_SUCCESS_KIDS: {
      return { ...state, isLoading: false, kidsProducts: payload.kidsProducts };
    }
    case GET_PRODUCTS_FAILURE_KIDS: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
