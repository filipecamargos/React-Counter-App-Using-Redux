import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';

//Create the store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
