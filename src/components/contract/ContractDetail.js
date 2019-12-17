import React, { Component } from 'react';

import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';

import './contract.css';
import history from '../../helpers/history';

class ContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 4
    };
  }

  handleBackClick = e => {
    history.push('/tutor-contract');
  };

  componentDidMount() {}

  render() {
    return (
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
              <Typography color="primary" className="text-left float-left mt-3">
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
                      <div className="text-left content-detail">11/11/2011</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div className="text-left title-field mt-3">Số giờ:</div>
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
                        Đã xác nhận
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
                        >
                          Hủy
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
                <Divider variant="middle" component="li" className="d-block" />
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
    );
  }
}

export default ContractDetail;
