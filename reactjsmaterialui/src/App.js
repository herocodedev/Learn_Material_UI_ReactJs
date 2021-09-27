import "./App.css";
import react from "react";
import MyAppbar from "./MyAppbar"
import MyContent from "./MyContent";

class App extends react.Component {
  render() {
    return (
    <div>
      <MyAppbar />
      <br />
      <MyContent />
    </div>);
  }
}

export default App;
