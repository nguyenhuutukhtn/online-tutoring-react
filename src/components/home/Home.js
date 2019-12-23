/* eslint-disable import/imports-first */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './home.css';
import io from 'socket.io-client';
import Banner from './Banner';
import WebsiteInfo from './WebsiteInfo';
import OutstandingTutor from './OutstandingTutor';
import OutstandingFeedback from './OutstandingFeedback';
import { requestOutStandingTutor } from '../../actions/tutor.action';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOutStandingTutor: [],
      socket: null
    };
  }

  componentDidMount() {
    const { getListOutStandingTutor } = this.props;
    getListOutStandingTutor(res => {
      this.setState({
        listOutStandingTutor: res.data
      });
    });
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const socket = io('http://localhost:3100');
      socket.on('connect', () => {});
      this.setState({ socket });
    }
  }

  render() {
    const { listOutStandingTutor } = this.state;
    return (
      <div>
        <Container fluid className="noPadding noMargin">
          <Row className="banner noPadding noMargin">
            <Col>
              <Banner />
            </Col>
          </Row>
          <Row className="banner noPadding noMargin">
            <Col>
              <WebsiteInfo />
            </Col>
          </Row>
          <Row className="noMargin noPadding">
            <Col className="noMargin noPadding">
              <OutstandingTutor listOutStandingTutor={listOutStandingTutor} />
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

const mapDispatchToProps = dispatch => ({
  getListOutStandingTutor: cb => dispatch(requestOutStandingTutor(cb))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
