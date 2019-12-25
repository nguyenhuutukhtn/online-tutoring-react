/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SendIcon from '@material-ui/icons/Send';

import './Compose.css';

export default class Compose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { content } = this.state;
    handleSubmit(content);
    this.setState({
      content: ''
    });
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    const { rightItems } = this.props;

    return (
      <div>
        <input
          type="text"
          className="compose-input d-inline"
          placeholder="Nhập tin nhắn"
          name="content"
          form="message"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <form id="message" onSubmit={this.onSubmit} className="d-inline">
          <SendIcon onClick={e => this.onSubmit(e)} />
        </form>
        {rightItems}
      </div>
    );
  }
}
