import { DataGrid } from '@mui/x-data-grid';
import React from 'react';


class Countries extends React.Component{
  constructor(props){
    super(props)
    const columns= [
      { field: 'Country', headerName: 'Country', width: 150 },
      { field: 'NewConfirmed', headerName: 'NewConfirmed', width: 150 },
      { field: 'TotalConfirmed', headerName: 'TotalConfirmed', width: 150 },
    ];
    this.state = {rows:[],columns:columns}
  }

  getData = () => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then((data) => {
      const dataNew = data.Countries.map((child,index) => {
        return Object.assign(child,{id:index++})
      })
      this.setState({rows:dataNew})
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    return (
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={this.state.rows} columns={this.state.columns} />
    </div>
    )
  }
}

export default Countries