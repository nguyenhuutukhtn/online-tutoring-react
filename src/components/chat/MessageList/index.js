/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import userActions from '../../../actions/user.action';

import './MessageList.css';

const MY_USER_ID = JSON.parse(localStorage.getItem('userInfo'))
  ? JSON.parse(localStorage.getItem('userInfo')).userId
  : '';
class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      message: this.props.message
    };
  }

  componentDidMount() {}

  renderMessages = () => {
    let { messages } = this.state;
    if (!messages) {
      // eslint-disable-next-line react/destructuring-assignment
      messages = this.props.message;
    }
    const tempMessages = [];
    if (messages) {
      messages.data.forEach(element => {
        const isMine = element.idSender === MY_USER_ID;
        const showTimestamp = false;
        const startsSequence = true;
        tempMessages.push(
          <Message
            isMine={isMine}
            startsSequence={startsSequence}
            endsSequence={!startsSequence}
            showTimestamp={showTimestamp}
            data={element}
          />
        );
      });
    }

    // Proceed to the next message.
    return tempMessages;
  };

  handleSubmit = content => {
    let userInfo = localStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const { otherData } = this.props;
    let { message } = this.state;
    if (!message) {
      message = this.props.message;
    }
    const data = {
      idSender: userInfo.userId,
      idReceiver: otherData.data.userId,
      content,
      time: new Date()
    };
    message.data.push(data);
    this.setState({
      message
    });
    const { sendMessage } = this.props;
    sendMessage(data);
  };

  render() {
    const { otherData } = this.props;
    let otherName = '';
    if (otherData && otherData.data) {
      otherName = otherData.data.name;
    }
    return (
      <div className="message-list">
        <Toolbar
          title={otherName || ''}
          rightItems={[
            <ToolbarButton
              key="info"
              icon="ion-ios-information-circle-outline"
            />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="message-list-container">{this.renderMessages()}</div>

        <Compose
          handleSubmit={this.handleSubmit}
          rightItems={[
            <ToolbarButton key="photo" icon="ion-ios-camera" />,
            <ToolbarButton key="image" icon="ion-ios-image" />,
            <ToolbarButton key="audio" icon="ion-ios-mic" />,
            <ToolbarButton key="money" icon="ion-ios-card" />,
            <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
            <ToolbarButton key="emoji" icon="ion-ios-happy" />
          ]}
        />
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  const { message, otherData } = state.chat;
  return { loggingIn, message, otherData };
}
const actionCreators = {
  // login: userActions.login
  // logout: userActions.logout
  // getAllMessage: userActions.getAllMessage
  sendMessage: userActions.sendMessage
};

const connectedChatPage = connect(
  mapState,
  actionCreators
)(MessageList);
export default connectedChatPage;
