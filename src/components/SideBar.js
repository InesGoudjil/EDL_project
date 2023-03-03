import React from "react";
import "./SideBar.css";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import {FiUsers} from "react-icons/fi";

function SideBar() {
  return (
    <div className="sidebar_all">
      <div className="container__">
        <div className="option">
          <FiUser />
          <a href="#">Consulter votre profile</a>
        </div>
        <div className="option">
          <FiUsers />
          <a href="#">Gestion des comptes</a>
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
  );
}

export default SideBar;
