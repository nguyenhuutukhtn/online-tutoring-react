import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from '@material-ui/core';
import './tutor.css';

export default class TutorReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container fluid className="main-tutor-review noMargin noPadding">
        <Row>
          <Col md="12">
            <div className="mt-4 list-skill-title text-left ml-4 pb-4">
              Nhận xét từ người học
            </div>
          </Col>
        </Row>
        <Row className="border border-info pt-4 mt-2 pb-2 star-div mx-auto">
          <Col md="3">
            <Typography color="primary" variant="h6">
              4,5/5
            </Typography>
            <Box component="fieldset" borderColor="transparent">
              <Typography component="legend">Tỉ lệ thành công</Typography>
              <Rating name="read-only" value="4.6" readOnly precision={0.5} />
            </Box>
            <div className="review-number">69 nhận xét</div>
          </Col>
          <Col md="9">
            <div
              className="text-left ml-2"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating name="read-only" value="5" readOnly />
              <Box ml={2}>30 nhận xét</Box>
            </div>
            <div
              className="text-left ml-2"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating name="read-only" value="4" readOnly />
              <Box ml={2}>30 nhận xét</Box>
            </div>
            <div
              className="text-left ml-2"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating name="read-only" value="3" readOnly />
              <Box ml={2}>30 nhận xét</Box>
            </div>
            <div
              className="text-left ml-2"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating name="read-only" value="2" readOnly />
              <Box ml={2}>30 nhận xét</Box>
            </div>
            <div
              className="text-left ml-2"
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Rating name="read-only" value="1" readOnly />
              <Box ml={2}>30 nhận xét</Box>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <List
              style={{
                width: '100%',
                backgroundColor: '#fffff'
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://placeimg.com/640/480/any"
                  />
                </ListItemAvatar>

                <ListItemText
                  primary="Nguyễn Hữu Tú"
                  secondary={
                    <div style={{ display: 'block' }}>
                      <Typography
                        component="span"
                        variant="body2"
                        style={{ display: 'block' }}
                        color="textPrimary"
                      >
                        12/12/2019
                      </Typography>
                      <Rating
                        name="read-only"
                        value="5"
                        readOnly
                        className="ml-0"
                      />
                      <div className="text-left">
                        Gia sư vừa giỏi vừa đẹp trai vkl, thật không thể tin nổi
                      </div>
                    </div>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://placeimg.com/640/480/any"
                  />
                </ListItemAvatar>

                <ListItemText
                  primary="Nguyễn Hữu Tú"
                  secondary={
                    <div style={{ display: 'block' }}>
                      <Typography
                        component="span"
                        variant="body2"
                        style={{ display: 'block' }}
                        color="textPrimary"
                      >
                        12/12/2019
                      </Typography>
                      <Rating
                        name="read-only"
                        value="5"
                        readOnly
                        className="ml-0"
                      />
                      <div className="text-left">
                        Gia sư vừa giỏi vừa đẹp trai vkl, thật không thể tin nổi
                      </div>
                    </div>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://placeimg.com/640/480/any"
                  />
                </ListItemAvatar>

                <ListItemText
                  primary="Nguyễn Hữu Tú"
                  secondary={
                    <div style={{ display: 'block' }}>
                      <Typography
                        component="span"
                        variant="body2"
                        style={{ display: 'block' }}
                        color="textPrimary"
                      >
                        12/12/2019
                      </Typography>
                      <Rating
                        name="read-only"
                        value="5"
                        readOnly
                        className="ml-0"
                      />
                      <div className="text-left">
                        Gia sư vừa giỏi vừa đẹp trai vkl, thật không thể tin nổi
                      </div>
                    </div>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}
