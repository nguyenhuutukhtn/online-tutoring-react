import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import history from '../../../helpers/history';
import './ConversationList.css';

export default function ConversationList() {
  const [conversations, setConversations] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const getConversations = () => {
    axios
      .get(
        `http://localhost:3100/users/getConverstationList?id=${userInfo.userId}`
      )
      .then(response => {
        const newConversations = response.data.data.map(result => {
          return {
            id: result.id,
            photo: result.avatar,
            name: `${result.name}`,
            text:
              'Hello world! This is a long message that needs to be truncated.'
          };
        });
        setConversations([...conversations, ...newConversations]);
      });
  };

  useEffect(() => {
    getConversations();
  }, []);
  const handleClick = id => {
    history.push(`/chat?idOther=${id}`);
  };
  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />
      <ConversationSearch />
      {conversations.map(conversation => (
        <ConversationListItem
          key={conversation.name}
          data={conversation}
          id={conversation.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
