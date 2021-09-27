import react from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
class Countries extends react.Component {
  constructor(props){
    super(props)
    // const rows= [
    //   { id: 1, col1: 'Hello', col2: 'World' },
    //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //   { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
    // ];

    // const columns= [
    //   { field: 'col1', headerName: 'Column 1', width: 150 },
    //   { field: 'col2', headerName: 'Column 2', width: 150 },
    // ];
    const columns = [
      { field: 'Country', headerName: 'Country', width: 150 },
      { field: 'Slug', headerName: 'Slug', width: 150 },
      { field: 'ISO2', headerName: 'ISO2', width: 150 },
    ]

    this.state = {rows:[], columns:columns};
    // this.getData()
  }

  getData = () => {
      fetch('https://api.covid19api.com/countries')
      .then(res => res.json())
      .then((data) => {
        const dataNew = data.map((child,index) => {
          return Object.assign(child,{id:index++})
        })
        console.log(dataNew)
        this.setState({rows:data})

      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
  }
  render() {
    return( 
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={this.state.rows} columns={this.state.columns} />
    </div>
)
  }
}

export default Countries;
