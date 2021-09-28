import "./App.css";
import react from "react";
import MyAppbar from "./MyAppbar";
import Countries from "./Countries";

class App extends react.Component {
  render() {
    return (
      <div>
        <MyAppbar />
        <br />
        <Countries />
      </div>
    );
  }
}

export default App;
