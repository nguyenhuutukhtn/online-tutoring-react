import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './home.css';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container fluid className="noMargin noPadding">
        <Row className="banner">
          <Col
            md="6"
            className="slogan-range noPadding noMargin align-items-center"
          >
            <div>
              <h1 className="slogan text-left ml-5 mr-5">
                Tìm kiếm gia sư cho bạn
              </h1>
              <h3 className="slogan-description ml-5 mr-5 text-left">
                Công cụ trực tuyến để tìm được một gia sư chất lượng
              </h3>
              <Button
                style={{
                  backgroundColor: '#007BFF',
                  color: '#ffffff',
                  padding: '5px'
                }}
                variant="contained"
                className="detail-button pt-3 pb-3 pl-4 pr-4 mt-5 text-left float-left ml-5"
                endIcon={<ArrowForwardIcon />}
              >
                Tìm kiếm gia sư
              </Button>
            </div>
          </Col>
          <Col md="6" className="noPadding noMargin">
            <img
              src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576320667/Tutor/hero-desk-laptop_1440x760.jpg.html_ceili1.jpg"
              alt="banner"
              className="banner-img"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Banner;
