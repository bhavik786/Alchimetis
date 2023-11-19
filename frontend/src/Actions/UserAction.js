import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
  CLEAR_ERRORS,
} from "../Constants/UserConstants";

export const UserAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REQUEST,
    });
    dispatch({
      type: USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
