/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"; // Assuming RootState is defined
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
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "./constants";

import { BACKEND_URL } from "../utils/constants";

// Define types for user and API response
interface User {
  // _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  postalCode: string;
  password: string;
  // role: string;
}

interface ApiResponse<T> {
  success: boolean;
  user?: T;
  users?: T[];
  message?: string;
  token?: string;
}

// Thunk Type
type ThunkResult<R = void> = ThunkAction<R, RootState, unknown, any>;

// Login
export const login =
  (email: string, password: string): ThunkResult =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data }: { data: ApiResponse<User> } = await axios.post(
        `${BACKEND_URL}/api/login`,
        { email, password },
        config
      );

      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
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

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data }: { data: ApiResponse<User> } = await axios.post(
        `${BACKEND_URL}/api/registration`,
        userData,
        config
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
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

    const { data }: { data: ApiResponse<User> } = await axios.get(
      `${BACKEND_URL}/api/me`
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response?.data?.message });
  }
};

// Log out user
export const logout = (): ThunkResult => async (dispatch: Dispatch) => {
  try {
    await axios.get(`${BACKEND_URL}/api/logout`);

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

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data }: { data: ApiResponse<boolean> } = await axios.put(
        `${BACKEND_URL}/api/me/update/info`,
        userData,
        config
      );

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
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

      const config = { headers: { "Content-Type": "application/json" } };

      const { data }: { data: ApiResponse<boolean> } = await axios.put(
        `${BACKEND_URL}/api/me/update`,
        passwords,
        config
      );

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
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

    const { data }: { data: ApiResponse<User[]> } = await axios.get(
      `${BACKEND_URL}/api/admin/users`
    );

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
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

      const config = { headers: { "Content-Type": "application/json" } };

      const { data }: { data: ApiResponse<string> } = await axios.post(
        `${BACKEND_URL}/api/password/forgot`,
        email,
        config
      );

      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
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

      const config = { headers: { "Content-Type": "application/json" } };

      const { data }: { data: ApiResponse<boolean> } = await axios.put(
        `${BACKEND_URL}/api/password/reset/${token}`,
        passwords,
        config
      );

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
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

      const { data }: { data: ApiResponse<null> } = await axios.delete(
        `${BACKEND_URL}/api/admin/user/${id}`
      );

      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
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

      const { data }: { data: ApiResponse<User> } = await axios.get(
        `${BACKEND_URL}/api/admin/user/${id}`
      );

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error: any) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Clear Errors
export const clearErrors =
  (): ThunkResult<void> => (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: CLEAR_ERRORS });
  };
