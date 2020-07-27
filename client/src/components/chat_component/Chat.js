import React, { useState, useEffect } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import InfoBarComponent from "../info_bar_component";
import InputComponent from "../input_component/InputComponent";
import MessagesComponent from "../messages_component/MessagesComponent";
import "./style.css";

let socket;

function Chat(props) {
  const ENDPOINT = "localhost:5000";
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const { name, room } = querystring.parse(props.location.search);
    setRoom(room);
    setName(name);
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      console.log("error", error);
      if (error) {
        // alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);

  console.log("data", name, room);
  /**
   * UseEffect will be used to handle all the text messages
   */
  useEffect(() => {
    socket.on("message", (message) => {
      console.log("useEffect  message", message);
      setMessages([...messages, message]);
    });
  }, [messages]);

  /**
   * Function to Send message through the server
   */
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {});
    }
  };

  console.log("message", message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBarComponent room={room} />
        <MessagesComponent messages={messages} name={name} />
        <InputComponent setmessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
