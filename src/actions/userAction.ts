/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../store";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "./constants";

import request from "../utils/request";

// Define types for user and API response
interface User {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  postalCode: string;
  password: string;
  // role: string;
}

// Thunk Type
type ThunkResult<R = void> = ThunkAction<R, RootState, unknown, any>;

// Login
export const login =
  (email: string, password: string): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      // Correctly pass headers
      const headers = { "Content-Type": "application/json" };

      // Call MarketAPI correctly
      const apiresponse = await request.post(
        "/login",
        { email, password },
        headers
      );

      const response = apiresponse.response;

      if (response.success) {
        if (response.token) {
          localStorage.setItem("access_token", response.token);
        }

        dispatch({ type: LOGIN_SUCCESS, payload: response.user });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: response.message || "Login failed",
        });
      }
    } catch (error: any) {
      dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message });
    }
  };

// Register
export const register =
  (userData: User): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const headers = { "Content-Type": "multipart/form-data" };

      const apiresponse = await request.post(
        "/registration",
        userData,
        headers
      );

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: response.user });
      } else {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: response.message || "Register failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Load User
export const loadUser = (): ThunkResult => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const apiresponse = await request.get("/me");

    const response = apiresponse.response;

    if (response.success) {
      localStorage.removeItem("access_token");

      dispatch({ type: LOAD_USER_SUCCESS, payload: response.user });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: response.message || "Load User failed",
      });
    }
  } catch (error: any) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response?.data?.message });
  }
};

// Log out user
export const logout = (): ThunkResult => async (dispatch: Dispatch) => {
  try {
    await request.get("/logout");

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error: any) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response?.data?.message });
  }
};

// Update Profile
export const updateProfile =
  (userData: FormData): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const config = { "Content-Type": "multipart/form-data" };

      const apiresponse = await request.put(
        "/me/update/info",
        userData,
        config
      );

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response.success });
      } else {
        dispatch({
          type: UPDATE_PROFILE_FAIL,
          payload: response.message || "Update User failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Update Password
export const updatePassword =
  (passwords: { oldPassword: string; newPassword: string }): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });

      const config = { "Content-Type": "application/json" };

      const apiresponse = await request.put(`/me/update`, passwords, config);

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: response.success });
      } else {
        dispatch({
          type: UPDATE_PASSWORD_FAIL,
          payload: response.message || "Update password failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Get All Users
export const getAllUsers = (): ThunkResult => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const apiresponse = await request.get(`/admin/users`);

    const response = apiresponse.response;

    if (response.success) {
      dispatch({ type: ALL_USERS_SUCCESS, payload: response.users });
    } else {
      dispatch({
        type: ALL_USERS_FAIL,
        payload: response.message || "Get Users failed",
      });
    }
  } catch (error: any) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response?.data?.message });
  }
};

// Forgot Password
export const forgotPassword =
  (email: { email: string }): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      const config = { "Content-Type": "application/json" };

      const apiresponse = await request.post(`/password/forgot`, email, config);

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.message });
      } else {
        dispatch({
          type: FORGOT_PASSWORD_FAIL,
          payload: response.message || "Request failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Reset Password
export const resetPassword =
  (token: string, passwords: { password: string }): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { "Content-Type": "application/json" };

      const apiresponse = await request.put(
        `/password/reset/${token}`,
        passwords,
        config
      );

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.success });
      } else {
        dispatch({
          type: RESET_PASSWORD_FAIL,
          payload: response.message || "Reset password failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Delete User (Admin)
export const deleteUser =
  (id: string): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const apiresponse = await request.delete(`/admin/user/${id}`);

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: DELETE_USER_SUCCESS, payload: response });
      } else {
        dispatch({
          type: DELETE_USER_FAIL,
          payload: response.message || "User delete failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Get User Details (Admin)
export const getUserDetails =
  (id: string): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const apiresponse = await request.get(`/admin/user/${id}`);

      const response = apiresponse.response;

      if (response.success) {
        dispatch({ type: USER_DETAILS_SUCCESS, payload: response.user });
      } else {
        dispatch({
          type: USER_DETAILS_FAIL,
          payload: response.message || "Request failed",
        });
      }
    } catch (error: any) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Update User Detail (Admin)
export const updateUserDetail =
  (id: string, userData: User): ThunkResult =>
  async (dispatch: Dispatch, getState) => {
    console.log("update User detail");
    try {
      const { allUsers } = getState() as RootState;
      console.log(allUsers);

      dispatch({ type: UPDATE_USER_REQUEST });

      const headers = { "Content-Type": "multipart/form-data" };

      const apiresponse = await request.put(
        `/admin/user/${id}`,
        userData,
        headers
      );

      const response = apiresponse.response;

      const updatedUsers = (allUsers.users ?? []).map((user: any) =>
        user._id === response.user._id ? response.user : user
      );

      if (response.success) {
        dispatch({ type: ALL_USERS_SUCCESS, payload: updatedUsers });
      } else {
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: response.message || "Update user failed",
        });
      }
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Clear Errors
export const clearErrors =
  (): ThunkResult<void> => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: CLEAR_ERRORS });
  };
