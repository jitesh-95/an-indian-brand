import axios from "axios";
import {
  GET_PRODUCTS_FAILURE_WOMEN,
  GET_PRODUCTS_REQUEST_WOMEN,
  GET_PRODUCTS_SUCCESS_WOMEN,
} from "./womenAction.types";

export const getProductsWomen = (page, sortBy) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST_WOMEN });
  return axios
    .get(`/products/women?page=${page}&sortBy=${sortBy}`)
    .then((r) =>
      dispatch({ type: GET_PRODUCTS_SUCCESS_WOMEN, payload: r.data })
    )
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE_WOMEN, payload: e }));
};
