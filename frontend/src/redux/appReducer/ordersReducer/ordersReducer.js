import {
  ADD_ORDERS_FAILURE,
  ADD_ORDERS_REQUEST,
  ADD_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "./ordersAction.types";

const initialState = {
  isLoading: false,
  isError: false,
  orders: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDERS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADD_ORDERS_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADD_ORDERS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case GET_ORDERS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_ORDERS_SUCCESS: {
      return { ...state, isLoading: false, orders: payload.ordersData };
    }
    case GET_ORDERS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default:
      return state;
  }
};
