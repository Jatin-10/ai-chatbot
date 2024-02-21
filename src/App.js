import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  extendTheme,
} from "@chakra-ui/react";
import { Provider, createStore } from "react-redux";
import Chat from "./components/Chat";
import Feedback from "./components/Feedback";
import ConversationList from "./components/ConversationList";
import FeedbackList from "./components/FeedbackList";
import store from "./app/store";

const theme = extendTheme({});

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CSSReset />
        <Router>
          <Routes>
            <Route path="/chat" component={Chat} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/conversations" component={ConversationList} />
            <Route path="/feedback-list" component={FeedbackList} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
