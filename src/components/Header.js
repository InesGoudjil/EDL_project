import React from "react";
import "./Header.css";
import logo from "./headericon.png";

function Header() {
  return (
    <div className="all_header">
      <div className="class">
      <img className="logo_header" src={logo} alt="logo" />
      </div>
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
