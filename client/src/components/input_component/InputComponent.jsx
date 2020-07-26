import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const InputComponent = ({ message, setmessage, sendMessage }) => {
  return (
    <div>
      <input
        className="input"
        value={message}
        onChange={(event) => setmessage(event.target.value)}
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </div>
  );
};

InputComponent.prototype = {
  message: PropTypes.string.isRequired,
  setmessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default InputComponent;
