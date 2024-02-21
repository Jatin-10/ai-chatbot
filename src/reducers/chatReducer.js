const initialState = {
  conversations: [],
  feedbackList: [],
  colorMode: "light", // 'light' or 'dark'
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      // Handle sending message logic
      return state;
    case "ADD_FEEDBACK":
      // Handle adding feedback logic
      return state;
    default:
      return state;
  }
};

export default chatReducer;
