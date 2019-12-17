import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Typography } from '@material-ui/core';

import Skeleton from 'react-loading-skeleton';

export default class TutorItemSkeleton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card small className="mt-5">
        <Card.Header className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <Skeleton circle height={110} width={110} />
          </div>
          <Skeleton count={2} />
        </Card.Header>
        <ListGroup flush>
          <ListGroupItem>
            <Skeleton count={1} />
            <Typography component="legend" className="text-left">
              <Skeleton count={1} />
            </Typography>
          </ListGroupItem>
          <ListGroupItem>
            <strong className="text-muted d-block mb-0 text-left">
              <Skeleton count={1} />
            </strong>
            <Typography component="legend" className="text-left">
              <Skeleton count={1} />
            </Typography>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2 text-left">
              <Skeleton count={1} />
            </strong>
            <Skeleton count={1} />
          </ListGroupItem>
        </ListGroup>
        <Card.Footer>
          <Skeleton count={1} />
        </Card.Footer>
      </Card>
    );
  }
}
