import "./App.css";
import react from "react";
import MyAppbar from "./MyAppbar";
import Countries from "./Countries";

class App extends react.Component {
  constructor(props){
    super(props)
    this.state = {selectedCountry: ''}
  }
  handleChangeCountry = (country) => {
    console.log('App chọn: ',country)
    this.setState({selectedCountry:country})
  }
  render() {
    return (
      <div>
        <MyAppbar handleChangeCountry = {this.handleChangeCountry} />
        <br />
        <Countries selectedCountry = {this.state.selectedCountry}/>
      </div>
    );
  }
}

export default App;
