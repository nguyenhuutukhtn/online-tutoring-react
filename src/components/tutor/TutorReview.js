import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import moment from 'moment';
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

  renderListRateAndComment = () => {
    const { listRateAndComment } = this.props;
    let listRateAndCommentElement = [];
    if (listRateAndComment) {
      listRateAndCommentElement = listRateAndComment.map(rateAndComment => {
        return (<div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={rateAndComment.avatar}
              />
            </ListItemAvatar>

            <ListItemText
              primary={rateAndComment.name}
              secondary={
                <div style={{ display: 'block' }}>
                  <Typography
                    component="span"
                    variant="body2"
                    style={{ display: 'block' }}
                    color="textPrimary"
                  >
                    {moment(rateAndComment.date).format("DD-MM-YYYY HH:mm")}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={rateAndComment.rate}
                    readOnly
                    className="ml-0"
                  />
                  <div className="text-left">
                    {rateAndComment.comment}
                  </div>
                </div>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
        </div>)
      })
    }
    return listRateAndCommentElement;
  }

  render() {
    const { listRateAndComment } = this.props;
    let totalRate = 0;
    if (listRateAndComment) {
      listRateAndComment.forEach(element => {
        totalRate += element.rate;
      });
    }
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
              {listRateAndComment ? totalRate / listRateAndComment.length : 0}/5
            </Typography>
            <Box component="fieldset" borderColor="transparent">
              <Rating name="read-only" value={listRateAndComment ? totalRate / listRateAndComment.length : 0} readOnly precision={0.5} />
            </Box>
            <div className="review-number">{listRateAndComment ? listRateAndComment.length : 0} nhận xét</div>
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
              {this.renderListRateAndComment()}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}
