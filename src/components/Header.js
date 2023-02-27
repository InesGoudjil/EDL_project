import React from "react";
import "./Header.css";
import logo from "./logo.png";

function Header() {
  return (
    <div className="all_header">
      <img className="logo_header" src={logo} alt="logo" />
      {/* <h1 className="big_title">
        Gestion du Déroulement du Concours du 3-ème cycle LMD Doctorat
      </h1> */}
      <div className="titles">
        <p className="title1">
        Gestion du Déroulement du Concours du 3-ème cycle LMD Doctorat
        </p>
        <p className="title2">PLATEFORME DE CANDIDATURE AU CONCOURS DE DOCTORAT</p>
      </div>
    </div>
  );
}

export default Header;
