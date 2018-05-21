import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './Files.css'

export default class Files extends Component {
  constructor(props) {
    super(props);

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload() {
    // Do something
  }

  render() {
    const { classes, files } = this.props;
    return (
<div className='container'>
    { files && files.length ?
    <Table striped bordered condensed hover className='file-list'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Filename</th>
            </tr>
        </thead>
        <tbody>
            { files.map((file) => (
            <tr>
                <td>${file && file.id}</td>
                <td>${file.name}</td>
            </tr>
            ))}
        </tbody>
    </Table> : null }
    <input id="file" type="file" className='file-input' onChange={this.handleFileUpload} />
    <Button component="label" htmlFor="file" variant="raised" color="primary">
          Upload File
        </Button>
</div>    );
  }
}
