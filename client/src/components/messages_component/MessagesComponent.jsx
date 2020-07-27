import React from "react";
import "./style.css";
import ScrollToBottom from "react-scroll-to-bottom";
import MessageComponent from "../MessageComponent/Message_Component";
import PropTypes from "prop-types";

const MessagesComponent = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => (
        <div key={index}>
          <MessageComponent message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

MessagesComponent.prototype = {
  messages: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default MessagesComponent;
