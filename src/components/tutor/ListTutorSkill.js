import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

import './tutor.css';

export default class ListTutorSkill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col md="12" className="list-skill">
            <div className="ml-sm-auto mr-sm-auto mt-4 list-skill-title">
              Kỹ năng nổi bật
            </div>
            <List className="mt-2">
              <ListItem>
                <ListItemAvatar>
                  <CardMembershipIcon style={{ color: '#007bff' }} />
                </ListItemAvatar>
                <ListItemText primary="Luyện thi khối A" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CardMembershipIcon style={{ color: '#007bff' }} />
                </ListItemAvatar>
                <ListItemText primary="Quăng bom" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CardMembershipIcon style={{ color: '#007bff' }} />
                </ListItemAvatar>
                <ListItemText primary="Chém gió" />
              </ListItem>
              ,
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}
