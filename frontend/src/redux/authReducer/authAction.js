import {
  CHECK_REGISTER_USER_ERROR,
  CHECK_REGISTER_USER_REQUEST,
  CHECK_REGISTER_USER_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./authActionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  return axios
    .post("https://near1499server.herokuapp.com/users", payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((r) => dispatch({ type: SIGNUP_SUCCESS, payload: r }))
    .catch((e) => dispatch({ type: SIGNUP_ERROR, payload: e }));
};

export const checkUser = () => (dispatch) => {
  dispatch({ type: CHECK_REGISTER_USER_REQUEST });
  return axios
    .get(`https://near1499server.herokuapp.com/users`)
    .then((r) =>
      dispatch({ type: CHECK_REGISTER_USER_SUCCESS, payload: r.data })
    )
    .catch((err) =>
      dispatch({ type: CHECK_REGISTER_USER_ERROR, payload: err })
    );
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};
