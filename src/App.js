//React redux by Yoshita jain youtube channel
import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Suman</h1>
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
