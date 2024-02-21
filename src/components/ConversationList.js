import React from 'react';
import { useSelector } from 'react-redux';

function ConversationList() {
  const conversations = useSelector((state) => state.chat.conversations);

  return (
    <div>
      <h2>Conversation List</h2>
      {/* Display list of conversations with a link to view each */}
    </div>
  );
};

export default ConversationList;
