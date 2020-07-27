import React from "react";
import "./style.css";
function Layout(props) {
  return (
    <div className="">
      {props.children}
      <div className="bg-black">Learned by Jatin with love</div>
    </div>
  );
}

export default Layout;
