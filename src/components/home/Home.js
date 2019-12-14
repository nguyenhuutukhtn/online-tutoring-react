import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import Banner from './Banner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container fluid className="noPadding noMargin">
          <Row className="banner">
            <Col>
              <Banner />;
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
