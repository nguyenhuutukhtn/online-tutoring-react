import React, { Component } from 'react';

import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './contract.css';
import ListContracts from './ListContract';
import { requestPolicyOfTutor } from '../../actions/tutor.action';

class TutorContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: true,
      count: null,
      data: null
    };
  }

  componentDidMount() {
    const { isNew } = this.state;
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, isNew, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
  }

  onPageChange = page => {
    const { isNew } = this.state;
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(page, isNew, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
  };

  getAllPolicy = () => {
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, false, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
    this.setState({
      isNew: false
    });
  };

  getNewPolicy = () => {
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, true, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
    this.setState({
      isNew: true
    });
  };

  render() {
    const { isNew, count, data } = this.state;

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
                      <Nav.Link
                        active={isNew}
                        className="nav-link-tab"
                        onClick={this.getNewPolicy}
                      >
                        <AccountBoxIcon lassName="d-inline" />
                        <div className="d-inline ml-1 ">
                          Danh sách hợp đồng chờ duyệt
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-tab mt-2 ">
                      <Nav.Link
                        active={!isNew}
                        eventKey="second"
                        className=" nav-link-tab "
                        onClick={this.getAllPolicy}
                      >
                        <AssignmentIcon className="d-inline" />
                        <div className="d-inline ml-1 ">
                          Danh sách hợp đồng{' '}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="second" active>
                      <ListContracts
                        count={count}
                        data={data}
                        onPageChange={this.onPageChange}
                      />
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

const mapDispatchToProps = dispatch => ({
  getListPolicy: (page, isNew, token, cb) =>
    dispatch(requestPolicyOfTutor(page, isNew, token, cb))
});

export default connect(
  null,
  mapDispatchToProps
)(TutorContract);
