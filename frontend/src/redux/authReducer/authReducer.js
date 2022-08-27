import {
  CHECK_REGISTER_USER_ERROR,
  CHECK_REGISTER_USER_REQUEST,
  CHECK_REGISTER_USER_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./authActionTypes";

let Token = localStorage.getItem("token");
const initialState = {
  isLoading: false,
  isError: false,
  token: Token ? Token : "",
  isAuth: Token ? true : false,
  userData: [],
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false };
    }
    //logout
    case LOGOUT: {
      localStorage.removeItem("token", payload);
      return { ...state, isLoading: false, token: "", isAuth: false };
    }

    //checkuser
    case CHECK_REGISTER_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case CHECK_REGISTER_USER_SUCCESS: {
      return { ...state, isLoading: false, userData: payload };
    }
    case CHECK_REGISTER_USER_ERROR: {
      return { ...state, isError: true, isLoading: false };
    }

    default:
      return state;
  }
};
