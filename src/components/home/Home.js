import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import Banner from './Banner';
import WebsiteInfo from './WebsiteInfo';
import OutstandingTutor from './OutstandingTutor';
import OutstandingFeedback from './OutstandingFeedback';

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
          <Row className="banner noPadding noMargin">
            <Col>
              <Banner />;
            </Col>
          </Row>
          <Row className="banner noPadding noMargin">
            <Col>
              <WebsiteInfo />
            </Col>
          </Row>
          <Row className="noMargin noPadding">
            <Col className="noMargin noPadding">
              <OutstandingTutor />
            </Col>
          </Row>
          <Row className="noMargin noPadding">
            <Col className="noMargin noPadding">
              <OutstandingFeedback />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
