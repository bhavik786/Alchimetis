// // ** Redux Imports
// import { createSlice } from "@reduxjs/toolkit";

// // ** UseJWT import to get config
// import useJwt from "@src/auth/jwt/useJwt";

// const config = useJwt.jwtConfig;

///// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** UseJWT import to get config
import useJwt from "@src/auth/jwt/useJwt";

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
  CLEAR_ERRORS,
} from "../Constants/UserConstants.js";
const config = useJwt.jwtConfig;

const initialUser = () => {
  const item = window.localStorage.getItem("userJson");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {};
};

export const authSlice = createSlice({
  name: "userAuthentication",
  initialState: {
    userData: initialUser(),
  },
  reducers: {
    userLogin: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userJson", JSON.stringify(action.payload));
    },

    handleLogin: (state, action) => {
      state.userData = action.payload;
      state[config.storageTokenKeyName] =
        action.payload[config.storageTokenKeyName];
      state[config.storageRefreshTokenKeyName] =
        action.payload[config.storageRefreshTokenKeyName];
      localStorage.setItem("userJson", JSON.stringify(action.payload));
      localStorage.setItem(
        config.storageTokenKeyName,
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem(
        config.storageRefreshTokenKeyName,
        JSON.stringify(action.payload.refreshToken)
      );
    },
    handleLogout: (state) => {
      state.userData = {};
      // state[config.storageTokenKeyName] = null;
      // state[config.storageRefreshTokenKeyName] = null;
      // ** Remove user, accessToken & refreshToken from localStorage
      localStorage.removeItem("userJson");
      // localStorage.removeItem(config.storageTokenKeyName);
      // localStorage.removeItem(config.storageRefreshTokenKeyName);
    },
  },
});

export const { userLogin, handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
