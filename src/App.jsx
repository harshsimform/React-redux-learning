import "./App.css";
// import CakeContainer2 from "./components/CakeContainer2";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContanier";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          {/* <CakeContainer2 /> */}
          <UserContainer />
          <NewCakeContainer />
          <IceCreamContainer />
        </div>
      </Provider>
    </>
  );
}

export default App;
