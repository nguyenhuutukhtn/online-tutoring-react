import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';

export default function Messenger(props) {
  const { socket } = props;
  return (
    <Container className="messenger-container">
      <Row>
        <Col md="4" className="scrollable">
          <ConversationList />
        </Col>
        <Col md="8">
          <MessageList socket={socket} />
        </Col>
      </Row>
    </Container>
    // <div className="messenger">
    //   <div className="scrollable sidebar">

    //   </div>

    //   <div className="content h-100">

    //   </div>
    // </div>
  );
}
