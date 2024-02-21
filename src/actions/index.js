export const sendMessage = (message) => ({
    type: 'SEND_MESSAGE',
    payload: { message },
  });
  
  export const addFeedback = (feedback) => ({
    type: 'ADD_FEEDBACK',
    payload: feedback,
  });
  