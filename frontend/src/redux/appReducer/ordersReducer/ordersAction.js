import axios from "axios";
import { getItemLocal } from "../../../utils/localStorage";

import {
  ADD_ORDERS_FAILURE,
  ADD_ORDERS_REQUEST,
  ADD_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "./ordersAction.types";

let token = getItemLocal("indianBrandToken");

export const getOrders = () => async (dispatch) => {
  let Token = await getItemLocal("indianBrandToken");

  dispatch({ type: GET_ORDERS_REQUEST });
  return axios
    .get(`/orders`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + Token,
      },
    })
    .then((r) => dispatch({ type: GET_ORDERS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_ORDERS_FAILURE }));
};

export const addOrders = (payload) => (dispatch) => {
  dispatch({ type: ADD_ORDERS_REQUEST });
  return axios
    .post(`/orders/addToOrders`, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => dispatch({ type: ADD_ORDERS_SUCCESS }))
    .catch((e) => dispatch({ type: ADD_ORDERS_FAILURE }));
};
