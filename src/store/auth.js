import { createSlice } from "@reduxjs/toolkit";

//initial state to manage auth
const authInitialstate = { isAuthenticated: false };

//slice for the auth
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialstate,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;