import {
  GET_TASK_FAILURE,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
} from "./appActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  tasks: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASK_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_TASK_SUCCESS: {
      return { ...state, isLoading: false, tasks: payload };
    }
    case GET_TASK_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
