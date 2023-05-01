import { legacy_createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        ...state,
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(counterReducer);

export default store;
