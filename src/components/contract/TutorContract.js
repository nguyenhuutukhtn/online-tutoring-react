import React, { Component } from 'react';

import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './contract.css';
import ListContracts from './ListContract';

class TutorContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // numPages: null,
      // pageNumber: 4
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Container className="pb-5">
        <Row>
          <Col>
            <Tab.Container>
              <Row>
                <Col sm={3} className="noMargin noPadding">
                  <Nav
                    variant="pills"
                    className="flex-column text-left mt-4 pb-4"
                  >
                    <Nav.Item className="nav-item-tab ">
                      <Nav.Link href="/" className="nav-link-tab">
                        <AccountBoxIcon lassName="d-inline" />
                        <div className="d-inline ml-1 ">Tài khoản</div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-tab mt-2 ">
                      <Nav.Link
                        active
                        eventKey="second"
                        className="d-inline nav-link-tab "
                      >
                        <AssignmentIcon className="d-inline" />
                        <div className="d-inline ml-1 ">Danh sách hợp đồng</div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="second" active>
                      <ListContracts />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TutorContract;
