/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
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
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          name="content"
          form="message"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <form id="message" onSubmit={this.onSubmit}>
          <button type="submit" value="Send" />
        </form>
        {rightItems}
      </div>
    );
  }
}
