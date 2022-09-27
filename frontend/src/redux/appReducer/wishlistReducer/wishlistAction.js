import { getItemLocal } from "../../../utils/localStorage";

import axios from "axios";
import {
  ADD_USER_WISHLIST_PRODUCTS_FAILURE,
  ADD_USER_WISHLIST_PRODUCTS_REQUEST,
  ADD_USER_WISHLIST_PRODUCTS_SUCCESS,
  DELETE_USER_WISHLIST_PRODUCTS_FAILURE,
  DELETE_USER_WISHLIST_PRODUCTS_REQUEST,
  DELETE_USER_WISHLIST_PRODUCTS_SUCCESS,
  GET_USER_WISHLIST_PRODUCTS_FAILURE,
  GET_USER_WISHLIST_PRODUCTS_REQUEST,
  GET_USER_WISHLIST_PRODUCTS_SUCCESS,
} from "./wishlistAction.types";

let token = getItemLocal("indianBrandToken");

export const getWishlistProducts = () => async (dispatch) => {
  let Token = await getItemLocal("indianBrandToken");

  dispatch({ type: GET_USER_WISHLIST_PRODUCTS_REQUEST });
  return axios
    .get(`/wishlist`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + Token,
      },
    })
    .then((res) =>
      dispatch({ type: GET_USER_WISHLIST_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: GET_USER_WISHLIST_PRODUCTS_FAILURE, payload: err })
    );
};

export const addProductsToWishlist = (payload) => (dispatch) => {
  dispatch({ type: ADD_USER_WISHLIST_PRODUCTS_REQUEST });
  return axios
    .post(`/wishlist/addToWishlist`, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    })
    .then((res) =>
      dispatch({ type: ADD_USER_WISHLIST_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ADD_USER_WISHLIST_PRODUCTS_FAILURE, payload: err })
    );
};

export const deleteWishlistItem = (id) => (dispatch) => {
  dispatch({ type: DELETE_USER_WISHLIST_PRODUCTS_REQUEST });
  return axios
    .delete(`/wishlist/delete/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      },
    })
    .then((res) =>
      dispatch({
        type: DELETE_USER_WISHLIST_PRODUCTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({ type: DELETE_USER_WISHLIST_PRODUCTS_FAILURE, payload: err })
    );
};
