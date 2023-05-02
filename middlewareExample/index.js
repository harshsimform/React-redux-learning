//? Action
// define action, action is an object that has "type" property
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action creator which create action, i.e. it's a function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

//? Reducer
// (previousState,action) => newState

// Multiple Reducers
const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIceCream: 15,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

//? Store
const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
// redux-logger logs all the information related to redux in your application. it lets you replay problems as if they happened in your own browser.
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
// redux library provides applyMiddleware function which is used to apply middleware we have used logger in this example
// with using middleware we can extend redux with additional functionality by adding additional behavior to the dispatch process.
// Middleware can modify the action, dispatch additional actions, or even stop an action from reaching the reducer.
//Middleware :- import applyMiddleware then pass it as argument to createStore and pass in middleware i.e. logger to the applyMiddleware method.

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
