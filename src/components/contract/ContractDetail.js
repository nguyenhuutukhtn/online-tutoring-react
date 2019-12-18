import React, { Component } from 'react';

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

import './contract.css';
import history from '../../helpers/history';

class ContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      ratingValue: 0,
      openPaymentDialog: false
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleBackClick = e => {
    history.push('/tutor-contract');
  };

  handleCompleteClick() {
    this.setState({ openDialog: true });
  }

  handleCancelClick() {
    this.setState({ openDialog: true });
  }

  handleDialogClose() {
    this.setState({ openDialog: false });
  }

  handleSendRequest() {
    this.setState({ openDialog: false });
    // Call API
  }

  handleRatingChange(e) {
    this.setState({ ratingValue: e.target.value });
  }

  handlePaymentClick = () => {};

  componentDidMount() {}

  render() {
    const { openDialog, ratingValue } = this.state;
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
                          11/11/2011
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
                          10 giờ
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
                          100000/giờ
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
                          <Badge variant="danger">Chưa thanh toán</Badge>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <ButtonGroup className="mt-5">
                          <Button
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
                            variant="outlined"
                            style={{
                              color: '#F70000',
                              background: null,
                              border: '1px solid #F70000',
                              borderRadius: 6
                            }}
                            startIcon={<CloseIcon />}
                            className="ml-5"
                            onClick={() => this.handleCompleteClick()}
                          >
                            Hủy
                          </Button>
                          <Button
                            variant="outlined"
                            style={{
                              color: '#1D4575',
                              background: null,
                              border: '1px solid #1D4575',
                              borderRadius: 6
                            }}
                            startIcon={<PaymentIcon />}
                            className="ml-5"
                          >
                            Thanh toán
                          </Button>
                          <Button
                            style={{
                              color: '#FFCC00',
                              background: null,
                              border: '1px solid #FFCC00',
                              borderRadius: 6
                            }}
                            startIcon={<ErrorIcon />}
                            className="ml-5"
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
                        src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<div className="party-name">Nguyễn Hữu Tú</div>}
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
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
                        src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<div className="party-name">Nguyễn Hữu Tú</div>}
                      secondary="Xô Viết Nghệ Tĩnh-Bình Thạnh"
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

            <Box orderColor="transparent" className="float-center text-center">
              <Typography component="legend">Chất lượng gia sư</Typography>
              <Rating value={ratingValue} onChange={this.handleRatingChange} />
            </Box>
            <TextField
              margin="dense"
              id="name"
              label="Viết cảm nhận"
              fullWidth
              multiline
              rows="4"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogClose()} color="primary">
              Bỏ qua
            </Button>
            <Button onClick={() => this.handleSendRequest()} color="primary">
              Hoàn thành
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ContractDetail;
