import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class PartsTable extends React.Component {
  render() {
    const data = [
      {
        id: 123,
        description: 'Screws',
        subpart: 'True',
        source: 'Swaglord Inc.',
        manufacturingNumber: 123,
        price: 12.15,
        category: 123,
        location: 1111,
        partCount: 1,
        longLead: 'True',
        notes: "It's a freaking screw"
      },
      {
        id: 123,
        description: 'Screws',
        subpart: 'True',
        source: 'Swaglord Inc.',
        manufacturingNumber: 123,
        price: 12.15,
        category: 123,
        location: 1111,
        partCount: 1,
        longLead: 'True',
        notes: "It's a freaking screw"
      }
    ];

    const columns = [
      {
        Header: 'Parts',
        columns: [
          { Header: 'ID', accessor: 'id' },
          { Header: 'Description', accessor: 'description' },
          { Header: 'Subpart?', accessor: 'subpart' },
          { Header: 'Source', accessor: 'source' },
          {
            Header: 'Manufacture Part Number',
            accessor: 'manufacturingNumber'
          },
          { Header: 'Price', accessor: 'price' },
          { Header: 'Category ID', accessor: 'category' },
          { Header: 'Location ID', accessor: 'location' },
          { Header: 'Part Count', accessor: 'partCount' },
          { Header: 'Long lead?', accessor: 'longLead' },
          { Header: 'Notes', accessor: 'notes' }
        ]
      }
    ];

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        pageSizeOptions={[10, 20, 100]}
        style={{ height: '500px', width: '1400px' }}
        className="-striped -highlight"
      />
    );
  }
}

export default PartsTable;
