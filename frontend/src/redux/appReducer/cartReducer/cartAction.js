import { getItemLocal } from "../../../utils/localStorage";
import {
  ADD_USER_PRODUCTS_FAILURE,
  ADD_USER_PRODUCTS_REQUEST,
  ADD_USER_PRODUCTS_SUCCESS,
  GET_USER_PRODUCTS_FAILURE,
  GET_USER_PRODUCTS_REQUEST,
  GET_USER_PRODUCTS_SUCCESS,
} from "./cartAction.types";
import axios from "axios";

let token = getItemLocal("indianBrandToken");
export const getProductsFromCart = () => (dispatch) => {
  dispatch({ type: GET_USER_PRODUCTS_REQUEST });
  return axios
    .get(`http://localhost:8080/cart`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    })
    .then((res) =>
      dispatch({ type: GET_USER_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: GET_USER_PRODUCTS_FAILURE, payload: err })
    );
};

export const addProductsToCart = (payload) => (dispatch) => {
  dispatch({ type: ADD_USER_PRODUCTS_REQUEST });
  return axios
    .post(`http://localhost:8080/cart/addToCart`, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    })
    .then((res) =>
      dispatch({ type: ADD_USER_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ADD_USER_PRODUCTS_FAILURE, payload: err })
    );
};
