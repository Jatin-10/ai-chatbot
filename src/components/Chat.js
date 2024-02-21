import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../actions';

function Chat() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    dispatch(sendMessage(message));
    setMessage('');
    // Make API call to mock AI response
  };

  return (
    <div>
      {/* Display chat messages here */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
