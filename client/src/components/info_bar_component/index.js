import React from "react";
import { closeImage, onlineIcon } from "../../assets/icons";
import "./style.css";

const InfoBarComponent = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img alt="Online " src={onlineIcon} />
        <h3>{room}</h3>
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
