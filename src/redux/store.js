import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
// Now, To Provide this store to react application we will use react-redux.

export default store;
