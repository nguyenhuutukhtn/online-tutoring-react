import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './footer.css';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 main-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="1" />
          <MDBCol md="5">
            <h5 className="title">Gia sư thông minh</h5>
            <img
              width="150"
              //   height="60"
              className="d-inline-block align-top"
              alt="logo"
              src="http://smartertutoring.com/wp-content/uploads/2016/08/20160816-Smarter-tutoring-logo-for-WordPress-banner_navy-blue-01-2.png"
            />
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="copyright text-center pt-4 pb-4">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Ngô Đức Kha - Nguyễn Ngô
          Tín - Nguyễn Hữu Tú
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
