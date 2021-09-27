import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class ComboCountries extends React.Component {
  constructor(props) {
    super(props);
    const columns = [
      { field: "Country", headerName: "Country", width: 150 },
      { field: "Slug", headerName: "Slug", width: 150 },
      { field: "ISO2", headerName: "ISO2", width: 150 },
    ];
    this.state = { rows: [], columns: columns, selectedCountry: "" };
  }

  getData = () => {
    fetch("https://api.covid19api.com/countries")
      .then((res) => res.json())
      .then((data) => {
        const dataNew = data.map((child, index) => {
          return Object.assign(child, { id: index++ });
        });
        this.setState({ rows: dataNew });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  handleChange = (e) => {
      console.log("Chọn: ",e.target.value)
      this.setState({selectedCountry:e.target.value})
  }

  render() {
    return (
      <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label" style={{color:"pink"}}>Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            style={{color:'aqua'}}
            value={this.state.selectedCountry}
            onChange={(e) => this.handleChange(e)}
          >
            {this.state.rows.map((value,index) => {
                return (
                    <MenuItem key={index} value={value.Country}>{value.Country}</MenuItem>
                )
            })}

          </Select>
        </FormControl>
      </div>
    );
  }
}

export default ComboCountries;
