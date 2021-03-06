import React, { useState, useEffect } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import InfoBarComponent from "../info_bar_component";
import InputComponent from "../input_component/InputComponent";
import MessagesComponent from "../messages_component/MessagesComponent";
import styles from "./style.module.css";

let socket;

function Chat(props) {
  const ENDPOINT = "https://node-chat-application-sockets.herokuapp.com/";
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [roomUsers, setRoomUsers] = useState([]);

  useEffect(() => {
    const { name, room } = querystring.parse(props.location.search);
    setRoom(room);
    setName(name);
    localStorage.setItem("loggedInUser", name);
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      // console.log("error", error);
      if (error) {
        // alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);

  // console.log("data", name, room);
  /**
   * UseEffect will be used to handle all the text messages
   */
  useEffect(() => {
    socket.on("message", (message) => {
      // console.log("useEffect  message", message);
      setMessages([...messages, message]);
    });

    socket.on("roomData", (data) => {
      setRoomUsers(data);
    });
  }, [messages]);

  /**
   * Function to Send message through the server
   */
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log("message", styles, message, messages, roomUsers);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <InfoBarComponent roomUsers={roomUsers} room={room} />
        <MessagesComponent messages={messages} name={name} />
        <InputComponent setmessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
