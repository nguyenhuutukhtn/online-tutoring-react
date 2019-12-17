import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Skeleton from 'react-loading-skeleton';
import 'react-vertical-timeline-component/style.min.css';

export default class TutorHistorySkeleton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col md="12" className="timeline">
            <div className="ml-sm-auto mr-sm-auto mt-4 history-title">
              <Skeleton />
            </div>

            <Skeleton height={60} />
            <Skeleton height={60} />
            <Skeleton height={60} />
          </Col>
        </Row>
      </Container>
    );
  }
}
