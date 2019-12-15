import React from 'react';
import { Card, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import { Button, Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import history from '../../helpers/history';
import './tutor.css';

export default class TutorItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  tranferDetail = () => {
    const { data } = this.props;
    history.push({
      pathname: '/tutor-detail',
      search: `?id=${data.id}`
    });
    window.location.reload();
  }

  render() {
    const { data } = this.props;
    return (
      <Card small className="mt-5">
        <Card.Header className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={data.avatar ? data.avatar : null}
              alt={data.name}
              width="110"
              height="110"
            />
          </div>
          <h5 className="mb-0 ml-0 mr-0 tutor-name">{data.name}</h5>
          <span className="text-muted d-block mb-2">{data.jobTitle}</span>
          <Box component="fieldset" mb={3} borderColor="transparent">
            {/* <Typography component="legend">Tỉ lệ thành công</Typography> */}
            <Rating name="read-only" value={data.avgRate} readOnly />
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
              {data.address ? data.address : 'Chưa cập nhật'}
            </Typography>

            <span>{data.metaValue}</span>
          </ListGroupItem>
          <ListGroupItem>
            <strong className="text-muted d-block mb-0 text-left">
              Học phí
            </strong>
            <Typography component="legend" className="text-left">
              {data.pricePerHour
                ? data.pricePerHour.toString().concat('/giờ')
                : 'Chưa cập nhật'}
            </Typography>

            <span>{data.metaValue}</span>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2 text-left">
              Tỉ lệ thành công
            </strong>
            <ProgressBar
              variant="determinate"
              className="progress-sm"
              now={data.successfullyRatio}
              label={`${data.successfullyRatio ? data.successfullyRatio : 0}%`}
            />

            <span>{data.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
        <Card.Footer>
          <Button
            onClick={this.tranferDetail}
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
