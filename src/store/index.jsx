import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import authSliceReducer from "./authSlice";

//? there can only be one reducer passed to create store, so when we will have multiple slices, we will have multiple reducers, so below is not good way to use.
// const store = legacy_createStore(counterSlice.reducer);

//? instead, we can import the configureStore function. ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
const store = configureStore({
  // combine multiple slices and their reducers.
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
