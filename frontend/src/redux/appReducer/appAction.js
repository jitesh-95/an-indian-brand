import {
  ADD_TASKS_FAILURE,
  ADD_TASKS_REQUEST,
  ADD_TASKS_SUCCESS,
  DELETE_TASKS_FAILURE,
  DELETE_TASKS_REQUEST,
  DELETE_TASKS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  UPDATE_SUBTASKS_STATUS_FAILURE,
  UPDATE_SUBTASKS_STATUS_REQUEST,
  UPDATE_SUBTASKS_STATUS_SUCCESS,
  UPDATE_TASKS_FAILURE,
  UPDATE_TASKS_REQUEST,
  UPDATE_TASKS_SUCCESS,
} from "./appActionTypes";
import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
//   params: {
//     country: "in",
//     lang: "en",
//     currentpage: "0",
//     pagesize: "30",
//     categories: "men",
//     concepts: "H&M MAN",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.API_KEY,
//     "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
//   },
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getProducts = (cate, page) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  return axios
    .get(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list`, {
      params: {
        country: "in",
        lang: "en",
        currentpage: "0",
        pagesize: "20",
        categories: "men",
        concepts: "H&M MAN",
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    })
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_PRODUCTS_FAILURE, payload: e }));
};

// export const updateTasks = (id, payload) => (dispatch) => {
//   dispatch({ type: UPDATE_TASKS_REQUEST });
//   return axios
//     .patch(`https://lineupserver.herokuapp.com/posts/${id}`, payload)
//     .then((r) => dispatch({ type: UPDATE_TASKS_SUCCESS, payload: r.data }))
//     .catch((e) => dispatch({ type: UPDATE_TASKS_FAILURE, payload: e }));
// };

// export const addNewTask = (payload) => (dispatch) => {
//   dispatch({ type: ADD_TASKS_REQUEST });
//   return axios
//     .post(`https://lineupserver.herokuapp.com/posts`, payload)
//     .then((r) => dispatch({ type: ADD_TASKS_SUCCESS, payload: r.data }))
//     .catch((e) => dispatch({ type: ADD_TASKS_FAILURE, payload: e }));
// };

// export const deleteTask = (id) => (dispatch) => {
//   dispatch({ type: DELETE_TASKS_REQUEST });
//   return axios
//     .delete(`https://lineupserver.herokuapp.com/posts/${id}`)
//     .then((r) => dispatch({ type: DELETE_TASKS_SUCCESS, payload: r.data }))
//     .catch((e) => dispatch({ type: DELETE_TASKS_FAILURE, payload: e }));
// };

// export const updateSubTasksStatus = (id, payload) => (dispatch) => {
//   dispatch({ type: UPDATE_SUBTASKS_STATUS_REQUEST });
//   return axios
//     .patch(`https://lineupserver.herokuapp.com/posts/${id}`, payload)
//     .then((r) =>
//       dispatch({ type: UPDATE_SUBTASKS_STATUS_SUCCESS, payload: r.data })
//     )
//     .catch((e) =>
//       dispatch({ type: UPDATE_SUBTASKS_STATUS_FAILURE, payload: e })
//     );
// };
