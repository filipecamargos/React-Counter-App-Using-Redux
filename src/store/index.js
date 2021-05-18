import { createSlice, configureStore } from "@reduxjs/toolkit";

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

//inital state to manage the counter
const counterInitialstate = { counter: 0, showCounter: true };

//slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Create the store
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
