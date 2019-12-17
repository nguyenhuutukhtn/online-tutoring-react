import React, { Component } from 'react';
import moment from 'moment';

import './contract.css';
import { Card } from 'react-bootstrap';

class ContractSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 4
    };
  }

  componentDidMount() {}

  render() {
    return <div></div>;
  }
}

export default ContractSummary;
