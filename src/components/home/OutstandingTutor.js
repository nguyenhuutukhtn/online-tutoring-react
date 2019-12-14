import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TutorItem from '../tutor/TutorItem';
import './home.css';
import './Benifit.css';

class OutstandingTutor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const data = {
      avatar:
        'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg',
      name: 'Nguyễn Hữu Tú',
      avgRate: 4.5,
      pricePerHour: 100000,
      successfullyRatio: 99
    };
    return (
      <div className="noMargin noPadding border list-tutor-page">
        <div className="benifit-title">
          <h1 className="benifit-title">Gia sư tiêu biểu</h1>
        </div>
        <Container className="mt-0 pb-5" expand="lg">
          <Row className="noPadding noMargin mt-0">
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
          </Row>
          <Row className="">
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
            <Col lg="4">
              <TutorItem data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OutstandingTutor;
