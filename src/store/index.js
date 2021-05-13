import { createStore } from "redux";

//inital state to manage
const initialstate = { counter: 0, showCounter: true };
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
