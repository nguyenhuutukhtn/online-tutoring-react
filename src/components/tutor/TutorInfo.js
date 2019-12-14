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
import { Box, Typography, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import MessageIcon from '@material-ui/icons/Message';
import './tutor.css';

export default class TutorInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {
        id: null,
        name: 'Nguyễn Hữu Tú',
        address: 'Quan 1',
        avatar: 'https://placeimg.com/640/480/any',
        pricePerHour: 100000,
        avgRate: 4,
        successfullyRatio: 80
      }
    };
  }

  render() {
    const { userDetails } = this.state;
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
                    src={userDetails.avatar}
                    alt={userDetails.name}
                    width="110"
                    height="110"
                  />
                </div>

                <h4 className="mb-0">{userDetails.name}</h4>

                <Box component="fieldset" mb={3} borderColor="transparent">
                  {/* <Typography component="legend">Tỉ lệ thành công</Typography> */}
                  <Rating
                    name="read-only"
                    value={userDetails.avgRate}
                    readOnly
                  />
                </Box>
                <div className="d-flex justify-content-between">
                  <Button
                    style={{ background: '#007bff', color: '#ffffff' }}
                    className="ml-4 button-register"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
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
                    {userDetails.address}
                  </Typography>

                  <span>{userDetails.metaValue}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <strong className="text-muted d-block mb-0 text-left">
                    Học phí
                  </strong>
                  <Typography component="legend" className="text-left">
                    {userDetails.pricePerHour}/giờ
                  </Typography>

                  <span>{userDetails.metaValue}</span>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                  <strong className="text-muted d-block mb-2 text-left">
                    Tỉ lệ thành công
                  </strong>
                  <ProgressBar
                    variant="determinate"
                    className="progress-sm"
                    now={userDetails.successfullyRatio}
                    label={`${userDetails.successfullyRatio}%`}
                  />

                  <span>{userDetails.metaValue}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <strong className="text-muted d-block mb-0 text-left">
                    Giới thiệu
                  </strong>
                  <span className="text-left float-left">
                    Các bác cho em hỏi chút... MAC Mini 2018 8GB RAM yếu quá.
                    Bây giờ nâng cấp thành 16G hoặc 32G thì mua RAM gì, mua ở
                    đâu (Em đã Google mà không thấy bán)? Cảm ơn các bác đã đọc
                    bài
                  </span>

                  <span>{userDetails.metaValue}</span>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <div className="blank-div-tutor-info h-100" />
      </Container>
    );
  }
}
