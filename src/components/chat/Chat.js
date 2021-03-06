import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Messenger from './Messenger';
import userActions from '../../actions/user.action';
import './chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(window.location.search);

    this.state = {
      idOther: searchParams.get('idOther')
    };

    this.socket = null;
    this.socket = io('https://smart-tutor-server.herokuapp.com/');
  }

  componentDidMount() {
    const { getAllMessage, loadDataOther } = this.props;
    let userInfo = localStorage.getItem('userInfo');
    const { idOther } = this.state;
    userInfo = JSON.parse(userInfo);
    if (idOther) {
      getAllMessage(userInfo.userId, idOther);
      loadDataOther(idOther);
    }
    this.socket.emit('send-user-id', userInfo.userId);
  }

  render() {
    const { message, otherData } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Messenger
                  message={message}
                  otherData={otherData}
                  socket={this.socket}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { message, tutorData } = state.chat;
  return { loggingIn, message, tutorData };
}

const actionCreators = {
  // login: userActions.login
  // logout: userActions.logout
  getAllMessage: userActions.getAllMessage,
  loadDataOther: userActions.loadDataOther
};

const connectedChatPage = connect(
  mapState,
  actionCreators
)(Chat);
export default connectedChatPage;
