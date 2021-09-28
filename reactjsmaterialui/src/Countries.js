import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import moment from 'moment';

class Countries extends React.Component{
  constructor(props){
    super(props)
    const columns= [
      { field: 'Country', headerName: 'Country', width: 150 },
      { field: 'NewConfirmed', headerName: 'Số Ca Mắc Hiện Tại', width: 150 },
      { field: 'TotalConfirmed', headerName: 'Tổng Số Ca Mắc', width: 150 },
      { field: 'TotalDeaths', headerName: 'Số Người Đã Died', width: 150 },
      { field: 'formatDate', headerName: 'Thời Gian', width: 150 },

    ];
    this.state = {
      rows:[],
      displayData:[],
      columns:columns,
      selectedCountry:props.selectedCountry}
  }

   

  getData = () => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then((data) => {
      const dataNew = data.Countries.map((child,index) => {
        return Object.assign(child,{id:index++},{formatDate:moment().add(child.Date).format('DD/MM/YY')})
      })
      this.setState({rows:dataNew,displayData:dataNew})
    })
    .catch(err => console.log(err))
  }

    static getDerivedStateFromProps(props,state){
      const displayData = state.rows.filter((val) => {
        return val.Country === props.selectedCountry || props.selectedCountry === ''
      })
      return {displayData: displayData }
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