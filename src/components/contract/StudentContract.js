import React, { Component } from 'react';

import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './contract.css';
import ListContracts from './ListContract';
import { requestPolicyOfStudent } from '../../actions/user.action';

class StudentContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unpaidPolicy: true,
      validPolicy: false,
      count: null,
      data: null
    };
  }

  componentDidMount() {
    const { unpaidPolicy, validPolicy } = this.state;
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, unpaidPolicy, validPolicy, token, res => {
      console.log('----rés', res);
      this.setState({
        count: res.count,
        data: res.data
      });
    });
  }

  onPageChange = page => {
    const { unpaidPolicy, validPolicy } = this.state;
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(page, unpaidPolicy, validPolicy, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
  };

  getAllPolicy = () => {
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, false, false, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
    this.setState({
      unpaidPolicy: false,
      validPolicy: false
    });
  };

  getUnpaidPolicy = () => {
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, true, false, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
    this.setState({
      unpaidPolicy: true,
      validPolicy: false
    });
  };

  getValidPolicy = () => {
    const { getListPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getListPolicy(1, false, true, token, res => {
      this.setState({
        count: res.count,
        data: res.data
      });
    });
    this.setState({
      unpaidPolicy: false,
      validPolicy: true
    });
  };

  render() {
    const { unpaidPolicy, validPolicy, count, data } = this.state;

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
                        active={unpaidPolicy}
                        className="nav-link-tab"
                        onClick={this.getUnpaidPolicy}
                      >
                        <AccountBoxIcon lassName="d-inline" />
                        <div className="d-inline ml-1 ">
                          Hợp đồng chưa thanh toán
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-tab ">
                      <Nav.Link
                        active={validPolicy}
                        className="nav-link-tab"
                        onClick={this.getValidPolicy}
                      >
                        <AccountBoxIcon lassName="d-inline" />
                        <div className="d-inline ml-1 ">
                          Hợp đồng đang hiệu lực
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item-tab mt-2 ">
                      <Nav.Link
                        active={!unpaidPolicy && !validPolicy}
                        eventKey="second"
                        className=" nav-link-tab "
                        onClick={this.getAllPolicy}
                      >
                        <AssignmentIcon className="d-inline" />
                        <div className="d-inline ml-1 ">Tất cả hợp đồng </div>
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
  getListPolicy: (page, unpaidPolicy, validPolicy, token, cb) =>
    dispatch(requestPolicyOfStudent(page, unpaidPolicy, validPolicy, token, cb))
});

export default connect(
  null,
  mapDispatchToProps
)(StudentContract);
