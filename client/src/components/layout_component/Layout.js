import React from "react";
import HeaderComponent from "../header_component/HeaderComponent";
import "./style.css";
function Layout(props) {
  return (
    <div className="">
      <HeaderComponent />
      {props.children}
      <div className="bg-black">Learned by Jatin with love</div>
    </div>
  );
}

export default Layout;
