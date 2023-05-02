import "./App.css";
import CakeContainer2 from "./components/CakeContainer2";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <CakeContainer2 />
        </div>
      </Provider>
    </>
  );
}

export default App;
