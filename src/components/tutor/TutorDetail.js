import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './tutor.css';
import TutorHistory from './TutorHistory';
import TutorInfo from './TutorInfo';
import ListTutorSkill from './ListTutorSkill';
import TutorReview from './TutorReview';

export default class TutorDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="4" className="noPadding noMargin tutor-info-col">
            <TutorInfo />
          </Col>

          <Col md="4" className="noPadding noMargin">
            <TutorHistory className="history-item" />
          </Col>
          <Col md="4" className="noPadding noMargin">
            <ListTutorSkill className="h-100 d-inline-block mw-100 list-tutor-item border border-dark" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="noPadding noMargin" md="12">
            <TutorReview />
          </Col>
        </Row>
      </Container>
    );
  }
}
