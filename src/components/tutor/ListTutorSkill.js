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

  renderListSkill = () => {
    const { tutorSkill } = this.props;
    let listtutorSkillElement = [];
    if (tutorSkill) {
      listtutorSkillElement = tutorSkill.map(skill => {
        return (<ListItem>
          <ListItemAvatar>
            <CardMembershipIcon style={{ color: '#007bff' }} />
          </ListItemAvatar>
          <ListItemText primary={skill.name} />
        </ListItem>)
      })
    }
    return listtutorSkillElement;
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
              {this.renderListSkill()}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}
