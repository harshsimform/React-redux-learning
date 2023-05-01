import { legacy_createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

// what we do with create slice is we are preparing a slice of our global state. we can also create different slices in different files to make our code maintainable.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Reducers is an object, a map you could say, of all the reducers this slice needs.
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//? there can only be one reducer passed to create store, so when we will have multiple slices, we will have multiple reducers, so below is not good way to use.
// const store = legacy_createStore(counterSlice.reducer);

//? instead, we can import the configureStore function. ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
export default store;
