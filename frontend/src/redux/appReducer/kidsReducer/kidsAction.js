import axios from "axios";
import {
  GET_PRODUCTS_FAILURE_KIDS,
  GET_PRODUCTS_REQUEST_KIDS,
  GET_PRODUCTS_SUCCESS_KIDS,
} from "./kidsAction.types";

export const getProductsKids = (params) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST_KIDS });
  return axios
    .get(`/products/kids`, { params })
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS_KIDS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE_KIDS, payload: e }));
};
