import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  ButtonGroup,
  Button,
  Dialog,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import history from '../../helpers/history';
import {
  requestPolicyDetail,
  requestApprovePolicy,
  requestCancelPolicy
} from '../../actions/tutor.action';

import './contract.css';

class TutorContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      approvePolicy: false,
      cancelPolicy: false,
      policy: null
    };
  }

  componentDidMount = () => {
    const { location, getPolicyDetail } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getPolicyDetail(id, token, res => {
      this.setState({
        policy: res.data
      });
    });
  };

  handleBackClick = () => {
    history.push('/tutor-contract');
  };

  renderStatus = status => {
    let result;
    switch (status) {
      case 'new':
        result = <Badge variant="primary">Mới</Badge>;
        break;
      case 'approve':
        result = <Badge variant="info ">Đã chấp nhận</Badge>;
        break;
      case 'complete':
        result = <Badge variant="success  ">Đã hoàn thành</Badge>;
        break;
      case 'cancel':
        result = <Badge variant="danger  ">Đã huỷ</Badge>;
        break;
      default:
        break;
    }
    return result;
  };

  renderPaymentStatus = status => {
    let result;
    switch (status) {
      case 'yes':
        result = <Badge variant="success">Đã thanh toán</Badge>;
        break;
      case 'no':
        result = <Badge variant="danger ">Chưa thanh toán</Badge>;
        break;
      default:
        break;
    }
    return result;
  };

  checkDisable = policy => {
    if (!policy) {
      return true;
    }
    if (policy.status === 'new' && policy.payment_status === 'yes') {
      return false;
    }
    return true;
  };

  handleCancelClick() {
    this.setState({ openDialog: true, cancelPolicy: true });
  }

  handleCompleteClick() {
    this.setState({ openDialog: true, approvePolicy: true });
  }

  handleDialogClose() {
    this.setState({
      openDialog: false,
      approvePolicy: false,
      cancelPolicy: false
    });
  }

  handleSendRequest() {
    this.setState({ openDialog: false });
    const { cancelPolicy, approvePolicy, policy } = this.state;
    const { setApprovePolicy, setCancelPolicy } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    if (approvePolicy) {
      return setApprovePolicy(policy.id, token);
    }
    if (cancelPolicy) {
      return setCancelPolicy(policy.id, token);
    }
    return null;
  }

  render() {
    const { openDialog, policy } = this.state;
    return (
      <div>
        <Container className="pb-5">
          <Row>
            <Col className="noPadding mt-2">
              <div>
                <IconButton
                  disableRipple
                  disableFocusRipple
                  className="float-left mt-0"
                  style={{ backgroundColor: 'transparent' }}
                  onClick={() => this.handleBackClick()}
                >
                  <ArrowBackIosIcon
                    style={{ color: '#1D4575' }}
                    className="d-inline mt-1"
                  />
                </IconButton>
                <Typography
                  color="primary"
                  className="text-left float-left mt-3"
                >
                  Quay về trang quản lý
                </Typography>
              </div>
            </Col>
          </Row>
          <Row className="noMargin noPadding">
            <Col className="noMargin noPadding">
              <Typography
                color="primary"
                variant="h4"
                className="mt-4 text-left"
                style={{ color: '#495057' }}
              >
                Chi tiết hợp đồng
              </Typography>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={8} className="noMargin noPadding">
              <Card>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field">Ngày tạo:</div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail">
                          {policy
                            ? moment(policy.register_date).format(
                                'DD-MM-YYYY HH:mm:ss'
                              )
                            : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Số giờ:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {policy ? policy.hours_hire : 0} giờ
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Giá thuê:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {policy ? policy.price : 0}K VNĐ
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Trạng thái:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {policy ? this.renderStatus(policy.status) : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <div className="text-left title-field mt-3">
                          Thanh toán:
                        </div>
                      </Col>
                      <Col md="8">
                        <div className="text-left content-detail mt-3">
                          {policy
                            ? this.renderPaymentStatus(policy.payment_status)
                            : null}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <ButtonGroup className="mt-5">
                          <Button
                            disabled={this.checkDisable(policy)}
                            style={{
                              color: '#4DA503',
                              background: null,
                              border: '1px solid #4DA503',
                              borderRadius: 6
                            }}
                            startIcon={<DoneIcon />}
                            onClick={() => this.handleCompleteClick()}
                          >
                            Chấp nhận
                          </Button>
                          <Button
                            variant="outlined"
                            disabled={this.checkDisable(policy)}
                            style={{
                              color: '#F70000',
                              background: null,
                              border: '1px solid #F70000',
                              borderRadius: 6
                            }}
                            startIcon={<CloseIcon />}
                            className="ml-5"
                            onClick={() => this.handleCancelClick()}
                          >
                            Từ chối
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Thông tin các bên</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-left ml-3">Gia sư</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src={
                          policy
                            ? policy.tutor_avatar
                            : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg'
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">
                          {policy ? policy.tutor_name : null}
                        </div>
                      }
                      secondary={policy ? policy.tutor_address : null}
                    />
                  </ListItem>
                  <Divider
                    variant="middle"
                    component="li"
                    className="d-block"
                  />
                  <div className="text-left ml-3 mt-3">Học sinh</div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="tutor"
                        src={
                          policy
                            ? policy.student_avatar
                            : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg'
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <div className="party-name">
                          {policy ? policy.student_name : null}
                        </div>
                      }
                      secondary={policy ? policy.student_address : null}
                    />
                  </ListItem>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Dialog
          open={openDialog}
          onClose={() => this.handleDialogClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Bạn chắc chắn chưa</DialogTitle>
          <DialogActions>
            <Button onClick={() => this.handleSendRequest()} color="primary">
              Tiếp tục thôi
            </Button>
            <Button onClick={() => this.handleDialogClose()} color="primary">
              Chưa
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPolicyDetail: requestPolicyDetail,
  setApprovePolicy: requestApprovePolicy,
  setCancelPolicy: requestCancelPolicy
};

export default connect(
  null,
  mapDispatchToProps
)(TutorContractDetail);
