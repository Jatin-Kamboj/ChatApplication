import React from "react";
import { closeImage, onlineIcon } from "../../assets/icons";
import "./style.css";

const InfoBarComponent = ({ room, roomUsers: { users } }) => {
  console.log("InfoBarComponent", users);
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img alt="Online " src={onlineIcon} />
        <h3>{room}</h3>
        <p>Online Users : {users && users?.users?.length}</p>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img alt="Close Tag" src={closeImage} />
        </a>
      </div>
    </div>
  );
};
export default InfoBarComponent;
