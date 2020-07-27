import React from "react";
import { closeImage, onlineIcon } from "../../assets/icons";
import styles from "./style.module.css";

const InfoBarComponent = ({ room, roomUsers: { users } }) => {
  console.log("InfoBarComponent", users);
  return (
    <div className={styles.infoBar}>
      <div className={`${styles.leftInnerContainer}`}>
        <img alt="Online " className={styles.onlineIcon} src={onlineIcon} />
        <h3>{room}</h3>
        <p className="mb-1 ml-2">Online Users : {users && users?.length}</p>
      </div>
      <div className={styles.rightInnerContainer}>
        <a onClick={() => localStorage.removeItem("loggedInUser")} href="/">
          <img alt="Close Tag" src={closeImage} />
        </a>
      </div>
    </div>
  );
};
export default InfoBarComponent;
