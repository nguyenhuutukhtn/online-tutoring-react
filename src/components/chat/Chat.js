import React from 'react';
import { Button, Dialog } from '@material-ui/core';
import Messenger from './Messenger';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Dialog fullScreen open>
          <Messenger />
        </Dialog>
      </div>
    );
  }
}

export default Chat;
