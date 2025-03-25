import { combineReducers } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

// Define Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
});

// Define RootState Type
export type RootState = ReturnType<typeof rootReducer>;

// Define Initial State
const initialState: Partial<RootState> = {};

// Middleware Array with Proper Typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middleWare: ThunkMiddleware<RootState, any>[] = [thunk];

// Configure Store with Proper Typing
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWare),
});

// Export store, RootState, and Dispatch Type
export type AppDispatch = typeof store.dispatch;
export default store;
