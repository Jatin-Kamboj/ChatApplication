import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";

// When a user joins a connnection event will be triggered
// and when a join disconnets then disconnection event will be called off
function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join and Create Chat rooms</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className={`joinInput mt-20`}
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          className={`${
            !name || !room ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className={`button mt-20 ${
              !name || !room ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            type="button"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
