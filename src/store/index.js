import { createSlice, configureStore } from "@reduxjs/toolkit";

//inital state to manage
const initialstate = { counter: 0, showCounter: true };

//Prepare a Slice of the global state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Create the store
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export default store;
