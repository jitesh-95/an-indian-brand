import axios from "axios";
import {
  GET_PRODUCTS_FAILURE_KIDS,
  GET_PRODUCTS_REQUEST_KIDS,
  GET_PRODUCTS_SUCCESS_KIDS,
} from "./kidsAction.types";

export const getProductsKids = (page) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST_KIDS });
  return axios
    .get(`http://localhost:8080/products/kids`)
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS_KIDS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE_KIDS, payload: e }));
};
