import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions';

function Feedback() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0); // You can use a star component for rating
  const [feedback, setFeedback] = useState('');

  const handleAddFeedback = () => {
    dispatch(addFeedback({ rating, feedback }));
    // Make API call to save feedback
  };

  return (
    <div>
      {/* Display feedback UI */}
      {/* Rating component */}
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={handleAddFeedback}>Submit Feedback</button>
    </div>
  );
};

export default Feedback;
