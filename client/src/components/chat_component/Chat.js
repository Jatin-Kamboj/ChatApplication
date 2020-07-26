import React, { useState, useEffect } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;
const ENDPOINT = "localhost:5000";

function Chat(props) {
  console.log("props", props);

  useEffect(() => {
    const { name, room } = querystring.parse(props.location.search);

    console.log("data", name, room);
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, ({ error }) => {
      console.log("error", error);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);
  return <div>Chat</div>;
}

export default Chat;
