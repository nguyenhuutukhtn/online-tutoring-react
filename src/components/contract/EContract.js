import React, { Component } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  BlobProvider
} from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import PDFContract from './PDFContract';
import { Container, Row, Col } from 'react-bootstrap';
import PSPDFKit from './PSPDFKit';

class EContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 4
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ height: '600px' }}>
        <PDFViewer width="100%" height="100%">
          <PDFContract />
        </PDFViewer>
      </div>
    );
  }
}

export default EContract;
