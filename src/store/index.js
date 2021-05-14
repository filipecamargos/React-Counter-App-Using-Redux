import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

//inital state to manage
const initialstate = { counter: 0, showCounter: true };

//Prepare a Slice of the global state
createSlice({
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
  }
});

//Reducer function to be executed
const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "increase":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "toogle":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

//Create the store
const store = createStore(counterReducer);

export default store;
