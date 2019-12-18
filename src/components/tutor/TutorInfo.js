import React from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  ProgressBar,
  Container,
  Row,
  Col
} from 'react-bootstrap';
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
import history from '../../helpers/history';
import './tutor.css';

export default class TutorInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false
    };
  }

  handleRegisterClick() {
    this.setState({ openDialog: true });
  }

  handleClose() {
    this.setState({ openDialog: false });
  }

  handleSendRegister() {
    this.setState({ openDialog: false });
    // Call API Register and redirect to list contract
    history.push('/tutor-contract');
  }

  render() {
    const { tutorData, introduce } = this.props;
    const { openDialog } = this.state;
    return (
      <Container className="noMargin noPadding h-100 tutor-info-col">
        <Row className="h-100">
          <Col>
            <Card
              small
              className="mt-5 tutor-info-col shadow-none card-info"
              style={{
                borderLeft: '1px solid grey',
                borderTop: '1px solid grey',
                borderRight: '1px solid grey'
              }}
            >
              <Card.Header className="border-bottom text-center noMargin noPadding">
                <div className="mb-3 mx-auto">
                  <img
                    className="rounded-circle"
                    src={tutorData ? tutorData.avatar : null}
                    alt={tutorData ? tutorData.name : null}
                    width="110"
                    height="110"
                  />
                </div>

                <h4 className="mb-0">{tutorData ? tutorData.name : null}</h4>

                <Box component="fieldset" mb={3} borderColor="transparent">
                  {/* <Typography component="legend">Tỉ lệ thành công</Typography> */}
                  <Rating
                    name="read-only"
                    value={tutorData ? tutorData.avgRate : null}
                    readOnly
                  />
                </Box>
                <div className="d-flex justify-content-between">
                  <Button
                    style={{ background: '#007bff', color: '#ffffff' }}
                    className="ml-4 button-register"
                    color="info"
                    href="#pablo"
                    onClick={() => this.handleRegisterClick()}
                    size="sm"
                  >
                    Đăng ký học
                  </Button>
                  <Button
                    style={{ color: '#007bff' }}
                    className="float-right mr-4"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
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
                    {tutorData ? tutorData.address : null}
                  </Typography>
                </ListGroupItem>
                <ListGroupItem>
                  <strong className="text-muted d-block mb-0 text-left">
                    Học phí
                  </strong>
                  <Typography component="legend" className="text-left">
                    {tutorData ? tutorData.pricePerHour : null}K VNĐ/giờ
                  </Typography>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                  <strong className="text-muted d-block mb-2 text-left">
                    Tỉ lệ thành công
                  </strong>
                  <ProgressBar
                    variant="determinate"
                    className="progress-sm"
                    now={tutorData ? tutorData.successfullyRatio : null}
                    label={tutorData ? `${tutorData.successfullyRatio}%` : ''}
                  />
                </ListGroupItem>
                <ListGroupItem>
                  <strong className="text-muted d-block mb-0 text-left">
                    Giới thiệu
                  </strong>
                  <span className="text-left float-left">
                    {introduce ? introduce.content : null}
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <div className="blank-div-tutor-info h-100" />
        <div>
          <Dialog
            open={openDialog}
            onClose={() => this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Đăng ký học</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Để đăng ký học, vui lòng nhập tổng số giờ bạn muốn đăng ký
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Tổng số tiền"
                fullWidth
              />
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
      </Container>
    );
  }
}
