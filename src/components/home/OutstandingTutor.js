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


  renderListTutor = () => {
    const { listOutStandingTutor } = this.props;
    const tutorMatrix = [];
    if (listOutStandingTutor) {
      if (listOutStandingTutor.length === 0) return null;
      for (let i = 0; i < listOutStandingTutor.length; i += 3) {
        const children = [];
        for (let j = i; j < i + 3; j += 1) {
          if (listOutStandingTutor[j]) {
            children.push(
              <Col lg="4">
                <TutorItem data={listOutStandingTutor[j]} />
              </Col>
            );
          }
        }
        tutorMatrix.push(<Row>{children}</Row>);
      }
    }
    return tutorMatrix;
  };

  render() {

    return (
      <div className="noMargin noPadding border list-tutor-page">
        <div className="benifit-title">
          <h1 className="benifit-title">Gia sư tiêu biểu</h1>
        </div>
        <Container className="mt-0 pb-5" expand="lg">
          <Row className="noPadding noMargin mt-0">
            {this.renderListTutor()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default OutstandingTutor;
