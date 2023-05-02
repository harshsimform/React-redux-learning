import { legacy_createStore as createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);
// Now, To Provide this store to react application we will use react-redux.

export default store;
