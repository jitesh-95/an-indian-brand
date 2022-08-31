import axios from "axios";
import {
  GET_PRODUCTS_FAILURE_MEN,
  GET_PRODUCTS_REQUEST_MEN,
  GET_PRODUCTS_SUCCESS_MEN,
} from "./menAction.types";

export const getProductsMen = (page) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST_MEN });
  return axios
    .get(`http://localhost:8080/products/men`)
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS_MEN, payload: r.data }))
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE_MEN, payload: e }));
};
