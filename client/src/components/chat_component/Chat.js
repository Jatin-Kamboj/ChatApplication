import React, { useState, useEffect } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;

function Chat(props) {
  console.log("props", props);
  const ENDPOINT = "localhost:5000";
  const [messages, setmessages] = useState([]);
  const [message, setmessage] = useState("");

  useEffect(() => {
    const { name, room } = querystring.parse(props.location.search);

    console.log("data", name, room);
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      console.log("error", error);
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);

  /**
   * UseEffect will be used to handle all the text messages
   */
  useEffect(() => {
    console.log("useEffect Message");
    socket.on("message", (message) => {
      console.log("useEffect  message", message);
      setmessages([...messages, message]);
    });
  });

  /**
   * Function to Send message through the server
   */
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setmessage("");
      });
    }
  };

  console.log("message", message);
  console.log("messages", messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <input
          value={message}
          onChange={(event) => setmessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  );
}

export default Chat;
