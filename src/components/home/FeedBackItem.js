import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './home.css';
import './Benifit.css';

class FeedBackItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ radius: '2px' }} className="shadow-none">
              <ListGroup>
                <ListGroupItem>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={data.name} src={data.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={data.name}
                        secondary={
                          <div style={{ display: 'block' }}>
                            <Typography
                              component="span"
                              variant="body2"
                              style={{ display: 'block' }}
                              color="textPrimary"
                            >
                              {data.description}
                            </Typography>
                            <Rating
                              name="read-only"
                              value="5"
                              readOnly
                              className="ml-0"
                            />
                          </div>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <div className="text-left feedback-content mt-4 mb-4 ml-2 mr-2">
                      <q>{data.content}</q>
                    </div>
                  </List>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FeedBackItem;
