import React, { Component } from 'react';

import './App.css';
// import { Document, Page } from 'react-pdf'
import { Document } from 'react-pdf/dist/entry.webpack';

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }


  render() {
    const { pageNumber } = this.state;
    return (
      
      <div className="App">
      
      <Document
          file="/src/sample.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {/* <Page pageNumber={pageNumber} /> */}
        </Document>
      
      </div>
    );
  }
}

export default App;
