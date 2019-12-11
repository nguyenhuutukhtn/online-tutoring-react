import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './profile.css';
import PageTitle from '../page-title/PageTitle';
import UserDetails from '../profile/UserDetails';
import UserAccountDetails from '../profile/UserAccountDetails';
import CommonNavbar from '../navbar/CommonNavbar';

class UserProfileLite extends React.Component {
  render() {
    return (
      <div className="mx-auto profile-page">
        <Container className="main-content-container main-profile" expand="lg">
          <Row className="page-header">
            <PageTitle
              title="Tài khoản"
              subtitle="Gia sư"
              md="12"
              className="ml-sm-auto mr-sm-auto page-title"
            />
          </Row>
          <Row className="">
            <Col lg="4">
              <UserDetails />
            </Col>
            <Col lg="8">
              <UserAccountDetails />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default UserProfileLite;
