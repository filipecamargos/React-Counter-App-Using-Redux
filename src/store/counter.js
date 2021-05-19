import { createSlice } from "@reduxjs/toolkit";

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

export default counterSlice;