import React from "react";
import "./Container.css";

import Header from "./Header";
import SideBar from "./SideBar";
import LoginPage from "./LoginPage";
import Footer from "./Footer";

function Container() {
  return (
    <div className="container">
      <div>
        A Propos
      </div>
      <LoginPage></LoginPage>
    </div>
  );
}

export default Container;
