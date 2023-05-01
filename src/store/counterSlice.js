import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

// what we do with create slice is we are preparing a slice of our global state. we can also create different slices in different files to make our code maintainable.
// 1. Counter Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
