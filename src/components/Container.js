import React from "react";
import "./Container.css";

import LoginPage from "./LoginPage";
import Footer from "./Footer";

function Container() {
  return (
    <div className="container">
      {/* <div className="about">
        A Propos
      </div> */}
      <LoginPage></LoginPage>
    </div>
  );
}

export default Container;
