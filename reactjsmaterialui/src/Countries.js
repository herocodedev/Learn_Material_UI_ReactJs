import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
// import Moment from 'react-moment';
import moment from 'moment';


class Countries extends React.Component{
  constructor(props){
    super(props)
    // const rows = [
    //   { id: 1, col1: 'Hello', col2: 'World' },
    //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //   { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    // ];
    const columns= [
      { field: "Country", headerName: "Đất Nước", width: 150 },
      { field: "NewConfirmed", headerName: "Số Ca Mắc Mới", width: 200 },
      { field: "TotalConfirmed", headerName: "Tổng Số Ca Đã Mắc", width: 200 },
      { field: "TotalDeaths", headerName: "Số Người died", width: 150 },
      { field: "formatDate", headerName: "Thời Gian", width: 200 },

    ];
    this.state = {rows:[],columns:columns,selectedCountry:props.selectedCountry,displayData:[]}
  }

  getData = () => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then((data) => {
      const dataNew = data.Countries.map((child,index) => {
        return Object.assign(child,{id:index++},{formatDate:moment().add(child.Date).format('DD/MM/YY')})
      })
      const displayData = [...dataNew]
      console.log(displayData)
      this.setState({rows:dataNew,displayData:displayData})
    })
    .catch(err => console.log(err))
  }

  static getDerivedStateFromProps(props,state){
    const displayData = state.rows.filter((val) => {
      return val.Country === props.selectedCountry || props.selectedCountry === ' '
    })
    return {displayData:displayData}
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return (
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={this.state.displayData.length > 0 ? this.state.displayData : this.state.rows} columns={this.state.columns} />
    </div>
    )
  }
}

export default Countries