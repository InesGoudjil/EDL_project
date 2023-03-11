import React from "react";
import "./Header.css";
import logo from "./headericon.png";
// import Header from "./Header";
import "./SideBar.css";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

function HeadSide({ children }) {
  return (
    <div>
      <div className="all_header">
        <div className="class">
          <img className="logo_header" src={logo} alt="logo" />
        </div>
        <div className="titles">
          <p className="title1">
            Gestion du Déroulement du Concours du 3-ème cycle LMD Doctorat
          </p>
          <p className="title2">
            PLATEFORME DE CANDIDATURE AU CONCOURS DE DOCTORAT
          </p>
        </div>
      </div>
      <div className="sidebar_all">
        <div className="container__">
          <div className="option">
            <FiUser />
            <a href="#">Profile</a>
          </div>
          <div className="option">
            <FiUsers />
            <a href="#">Comptes</a>
          </div>
          {/* <div className="option">
          <FiUserPlus />
          <a href="#">Création des comptes</a>
        </div>
        <div className="option">
          <FiUserX />
          <a href="#">Suppression des comptes</a>
        </div> */}
        </div>
      </div>
      {children}
    </div>
  );
}

export default HeadSide;
