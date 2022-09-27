import {
  GET_PRODUCTS_FAILURE_WOMEN,
  GET_PRODUCTS_REQUEST_WOMEN,
  GET_PRODUCTS_SUCCESS_WOMEN,
} from "./womenAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  womenProducts: [],
  totalProducts: 0,
};

export const womenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST_WOMEN: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCTS_SUCCESS_WOMEN: {
      return {
        ...state,
        isLoading: false,
        womenProducts: payload.womensProducts,
        totalProducts: payload.total,
      };
    }
    case GET_PRODUCTS_FAILURE_WOMEN: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
