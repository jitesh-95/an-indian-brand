import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./authActionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post("/user/register", payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => dispatch({ type: SIGNUP_SUCCESS, payload: r }))
    .catch((e) => dispatch({ type: SIGNUP_ERROR, payload: e }));
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("/user/login", payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r }))
    .catch((e) => dispatch({ type: LOGIN_ERROR, payload: e }));
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
