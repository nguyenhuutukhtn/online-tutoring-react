import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import { Button, Icon, makeStyles, Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './tutor.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

export default class TutorItem extends React.Component {
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
      <Card small className="mt-5">
        <Card.Header className="border-bottom text-center">
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
          <span className="text-muted d-block mb-2">
            {userDetails.jobTitle}
          </span>
          <Box component="fieldset" mb={3} borderColor="transparent">
            {/* <Typography component="legend">Tỉ lệ thành công</Typography> */}
            <Rating name="read-only" value={userDetails.avgRate} readOnly />
          </Box>
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
              label={userDetails.successfullyRatio + '%'}
            ></ProgressBar>

            <span>{userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
        <Card.Footer>
          <Button
            style={{
              backgroundColor: '#007BFF',
              color: '#ffffff'
            }}
            variant="contained"
            className="detail-button"
            endIcon={<ArrowForwardIcon />}
          >
            Chi tiết
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
