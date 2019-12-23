import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
  const { data, isMine } = props;
  const friendlyTimestamp = moment(data.time).format('LLLL');
  return (
    <div className={['message', `${isMine ? 'mine' : ''}`].join(' ')}>
      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          {data.content}
        </div>
      </div>
    </div>
  );
}
