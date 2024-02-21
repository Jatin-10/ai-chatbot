import React from 'react';
import { useSelector } from 'react-redux';

const FeedbackList = () => {
  const feedbackList = useSelector((state) => state.chat.feedbackList);

  return (
    <div>
      <h2>Feedback List</h2>
      {/* Display feedback points in a table */}
    </div>
  );
};

export default FeedbackList;
