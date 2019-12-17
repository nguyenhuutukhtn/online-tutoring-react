import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

class ProfileSkeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mx-auto profile-page">
        <Container className="main-content-container main-profile" expand="lg">
          <Row>
            <Col>
              <Skeleton count={3} />
            </Col>
          </Row>
          <Row className="">
            <Col lg="4">
              <Skeleton height={110} width={110} circle />
              <Skeleton count={12} />
            </Col>
            <Col lg="8">
              <Skeleton count={20} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfileSkeleton;
