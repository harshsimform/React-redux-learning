import { legacy_createStore } from "redux";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(counterReducer);

export default store;
