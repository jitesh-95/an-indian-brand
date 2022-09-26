import axios from "axios";
import {
  GET_PRODUCTS_FAILURE_MEN,
  GET_PRODUCTS_REQUEST_MEN,
  GET_PRODUCTS_SUCCESS_MEN,
} from "./menAction.types";

export const getProductsMen = (page, sortBy) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST_MEN });
  return axios
    .get(
      `https://an-indian-brand.herokuapp.com/products/men?page=${page}&sortBy=${sortBy}`
    )
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS_MEN, payload: r.data }))
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE_MEN, payload: e }));
};
