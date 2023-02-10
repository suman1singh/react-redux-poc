import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Suman</h1>
      </div>
    </Provider>
  );
}

export default App;
