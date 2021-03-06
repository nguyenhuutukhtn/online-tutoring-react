/* eslint-disable react/sort-comp */
/* eslint-disable import/imports-first */
/* eslint-disable import/order */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import MessageIcon from '@material-ui/icons/Message';
import Skeleton from 'react-loading-skeleton';
import history from '../../helpers/history';
import './tutor.css';
import userActions from '../../actions/user.action';

class TutorInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      clickRegister: false,
      hoursHire: null,
      totalPrice: null
    };
  }

  onChangeHandler = event => {
    const { name, value } = event.target;
    const { tutorData } = this.props;
    this.setState({
      [name]: value,
      totalPrice: value * tutorData.pricePerHour
    });
  };

  handleRegisterClick = e => {
    e.preventDefault();
    this.setState({
      clickRegister: true
    });
    if (!this.handleCheck()) {
      this.setState({
        openDialog: true
      });
    }
  };

  handleCheck = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      return true;
    }
    const { role } = JSON.parse(userInfo);
    if (role === 'tutor') {
      return true;
    }
    return false;
  };

  handleClose() {
    this.setState({ openDialog: false });
  }

  handleSendRegister() {
    this.setState({ openDialog: false });
    const { registerPolicy, tutorData } = this.props;
    const { hoursHire } = this.state;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    if (hoursHire > 0) {
      registerPolicy(tutorData.id, hoursHire, token);
    }
  }

  handleSendMessage = () => {
    const { tutorData } = this.props;
    history.push(`/chat?idOther=${tutorData.id}`);
  };

  render() {
    const { tutorData, introduce } = this.props;
    const { openDialog, totalPrice, clickRegister } = this.state;
    console.log('-----click', clickRegister);
    console.log('-------', this.handleCheck());
    if (clickRegister && this.handleCheck()) {
      console.log('----xxxx');
      return <Redirect to="/login" />;
    }
    return (
      <Card
        small
        className="shadow-none card-info"
        style={{
          borderLeft: '1px solid grey',
          borderTop: '1px solid grey',
          borderRight: '1px solid grey',
          borderBottom: '1px solid grey'
        }}
      >
        <Card.Header className=" text-center ">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={
                tutorData && tutorData.avatar
                  ? tutorData.avatar
                  : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png'
              }
              alt={tutorData ? tutorData.name : <Skeleton />}
              width="110"
              height="110"
            />
          </div>

          <h4 className="mb-0">{tutorData ? tutorData.name : <Skeleton />}</h4>

          <Box component="fieldset" mb={3} borderColor="transparent">
            {/* <Typography component="legend">Tỉ lệ thành công</Typography> */}
            {tutorData ? (
              <Rating
                name="read-only"
                value={tutorData ? tutorData.avgRate : 0}
                readOnly
              />
            ) : (
              <Skeleton />
            )}
          </Box>
          <div className="d-flex justify-content-between">
            <Button
              style={{ background: '#007bff', color: '#ffffff' }}
              className="ml-4 button-register"
              color="info"
              type="button"
              onClick={e => this.handleRegisterClick(e)}
              size="sm"
            >
              Đăng ký học
            </Button>
            <Button
              style={{ color: '#007bff' }}
              className="float-right mr-4"
              color="default"
              onClick={this.handleSendMessage}
              size="sm"
              startIcon={<MessageIcon />}
            >
              Message
            </Button>
          </div>
          {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
        </Card.Header>

        <ListGroup flush>
          <ListGroupItem>
            <strong className="text-muted d-block mb-0 text-left">
              Địa chỉ
            </strong>
            <Typography component="legend" className="text-left">
              {tutorData ? tutorData.address : <Skeleton />}
            </Typography>
          </ListGroupItem>
          <ListGroupItem>
            <strong className="text-muted d-block mb-0 text-left">
              Học phí
            </strong>
            <Typography component="legend" className="text-left">
              {tutorData ? tutorData.pricePerHour : <Skeleton />}K VNĐ/giờ
            </Typography>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2 text-left">
              Tỉ lệ thành công
            </strong>
            <ProgressBar
              variant="determinate"
              className="progress-sm"
              now={tutorData ? tutorData.successfullyRatio : <Skeleton />}
              label={tutorData ? `${tutorData.successfullyRatio}%` : ''}
            />
          </ListGroupItem>
          <ListGroupItem>
            <strong className="text-muted d-block mb-0 text-left">
              Giới thiệu
            </strong>
            <span className="text-left float-left">
              {introduce ? introduce.content : <Skeleton count={6} />}
            </span>
          </ListGroupItem>
        </ListGroup>
        <div>
          <Dialog
            open={openDialog}
            onClose={() => this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Đăng ký học</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Để đăng ký học, vui lòng nhập tổng số giờ bạn muốn đăng ký học
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                type="number"
                id="name"
                name="hoursHire"
                label="Tổng số giờ"
                InputProps={{ inputProps: { min: 0, max: 24 } }}
                onChange={this.onChangeHandler}
                fullWidth
              />
              <DialogContentText>
                Tổng tiền: {totalPrice || 0}K VNĐ
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleClose()} color="primary">
                Bỏ qua
              </Button>
              <Button onClick={() => this.handleSendRegister()} color="primary">
                Đăng Ký
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  registerPolicy: userActions.requestRegisterPolicy
};

export default connect(
  null,
  mapDispatchToProps
)(TutorInfo);
