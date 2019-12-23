import React, { Component } from 'react';
import moment from 'moment';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
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
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Box
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Rating from '@material-ui/lab/Rating';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import PaymentIcon from '@material-ui/icons/Payment';
import history from '../../helpers/history';
import userActions from '../../actions/user.action';

import './contract.css';

class ContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      ratingValue: 0,
      comment: null,
      openPaymentDialog: false,
      openReportDialog: false,
      openCancelDialog: false,
      report: null,
      policy: null
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
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

  handleBackClick = () => {
    history.push('/student-contract');
  };

  handeCancelPolicy = () => {
    const { location, cancelPolicy } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    cancelPolicy(token, id);
    this.setState({
      openCancelDialog: false
    });
  };

  handleCancelClick = () => {
    this.setState({ openCancelDialog: true });
  };

  handleCompleteClick = () => {
    this.setState({ openDialog: true });
  };

  handleCompletePolicy = () => {
    const { location, completePolicy } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const { ratingValue, comment } = this.state;

    completePolicy(token, id, comment, ratingValue);
    this.setState({
      openDialog: false
    });
  };

  handlePaymentClick = () => {
    this.setState({ openPaymentDialog: true });
  };

  handlePayPolicy = () => {
    const { location, payPolicy } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    payPolicy(token, id);
    this.setState({
      openPaymentDialog: false
    });
  };

  handleReportClick = () => {
    this.setState({ openReportDialog: true });
  };

  onReportChange = e => {
    this.setState({ report: e.target.value });
  };

  handleReport = () => {
    const { report } = this.state;
    const { location, reportPolicy } = this.props;
    const id = location.search.split('=')[1];
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    reportPolicy(token, id, report);
    this.setState({
      openPaymentDialog: false
    });
  };

  handleDialogClose = () => {
    this.setState({
      openDialog: false,
      openPaymentDialog: false,
      openReportDialog: false,
      openCancelDialog: false
    });
  };

  handleSendRequest = () => {
    this.setState({ openDialog: false });
    // Call API
  };

  handleRatingChange = e => {
    this.setState({ ratingValue: e.target.value });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const {
      openDialog,
      ratingValue,
      openPaymentDialog,
      openReportDialog,
      openCancelDialog,
      policy
    } = this.state;
    if (policy) {
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
                              disabled={policy.status !== 'approve'}
                              style={{
                                color: '#4DA503',
                                background: null,
                                border: '1px solid #4DA503',
                                borderRadius: 6
                              }}
                              startIcon={<DoneIcon />}
                              onClick={() => this.handleCompleteClick()}
                            >
                              Hoàn thành
                            </Button>
                            <Button
                              disabled={policy.status !== 'new'}
                              variant="outlined"
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
                              Hủy
                            </Button>
                            <Button
                              disabled={policy.payment_status === 'yes'}
                              variant="outlined"
                              style={{
                                color: '#1D4575',
                                background: null,
                                border: '1px solid #1D4575',
                                borderRadius: 6
                              }}
                              startIcon={<PaymentIcon />}
                              className="ml-5"
                              onClick={() => this.handlePaymentClick()}
                            >
                              Thanh toán
                            </Button>
                            <Button
                              disabled={policy.status !== 'approve'}
                              style={{
                                color: '#FFCC00',
                                background: null,
                                border: '1px solid #FFCC00',
                                borderRadius: 6
                              }}
                              startIcon={<ErrorIcon />}
                              className="ml-5"
                              onClick={() => this.handleReportClick()}
                            >
                              Khiếu nại
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
                            {' '}
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
            <DialogTitle id="form-dialog-title">Đánh giá</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Xin đánh giá và cho biết cảm nhận của bạn về gia sư và quá trình
                học
              </DialogContentText>

              <Box
                orderColor="transparent"
                className="float-center text-center"
              >
                <Typography component="legend">Chất lượng gia sư</Typography>
                <Rating
                  value={ratingValue}
                  onChange={this.handleRatingChange}
                />
              </Box>
              <TextField
                margin="dense"
                id="name"
                label="Viết cảm nhận"
                fullWidth
                multiline
                onChange={this.handleCommentChange}
                rows="4"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleDialogClose()} color="primary">
                Bỏ qua
              </Button>
              <Button
                onClick={() => this.handleCompletePolicy()}
                color="primary"
              >
                Hoàn thành
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openPaymentDialog}
            onClose={() => this.handleDialogClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Vui lòng kiểm tra lại thông tin
            </DialogTitle>
            <DialogContent>
              <Container>
                <Row>
                  <Col md="6">
                    <div className="text-left title-field mt-3">
                      Thanh toán cho
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-left content-detail mt-3">
                      {policy.tutor_name}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="text-left title-field mt-3">
                      Số giờ thuê
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="text-left content-detail mt-3">
                      {policy.hours_hire} giờ
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="text-left title-field mt-3">Số tiền:</div>
                  </Col>
                  <Col md="6">
                    <div className="text-left content-detail mt-3">
                      {policy ? policy.price : 0}K VNĐ
                    </div>
                  </Col>
                </Row>
              </Container>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleDialogClose()} color="primary">
                Hủy bỏ
              </Button>
              <Button
                onClick={() => this.handlePayPolicy()}
                color="primary"
                autoFocus
              >
                Tiếp tục
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openReportDialog}
            onClose={() => this.handleDialogClose()}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Khiếu nại</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Vui lòng cho biết nội dung bạn muốn khiếu nại để chúng tôi xem
                xét giải quyết
              </DialogContentText>
              <TextField
                margin="dense"
                id="name"
                label="Nội dung khiếu nại"
                onChange={this.onReportChange}
                fullWidth
                multiline
                variant="outlined"
                rows="5"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleDialogClose()} color="primary">
                Bỏ qua
              </Button>
              <Button onClick={() => this.handleReport()} color="primary">
                Khiếu nại
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openCancelDialog}
            onClose={() => this.handleDialogClose()}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Bạn chắc chắn chưa</DialogTitle>
            <DialogActions>
              <Button onClick={() => this.handleDialogClose()} color="primary">
                Huỷ bỏ
              </Button>
              <Button onClick={() => this.handeCancelPolicy()} color="primary">
                Tiếp tục
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = {
  getPolicyDetail: userActions.requestPolicyDetail,
  payPolicy: userActions.requestPayPolicy,
  cancelPolicy: userActions.requestCancelPolicy,
  completePolicy: userActions.requestCompletePolicy,
  reportPolicy: userActions.requestReportPolicy
};

export default connect(
  null,
  mapDispatchToProps
)(ContractDetail);
