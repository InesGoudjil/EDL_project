import React from "react";
import "./HomeAdmin.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import {ImUserPlus} from "react-icons/im";
import{ImUserMinus} from "react-icons/im";
import {ImUsers} from "react-icons/im"
import {ImHistory} from "react-icons/im";
import {BsInfoSquareFill} from "react-icons/bs";

function HomeAdmin() {
  return (
    <div className="allHomeAdmin">
      <div className="headHomeAdmin">
        <FaUniversity className="bigIconStylea"/>
        BienVenue Administrateur :)
      </div>

      <div className="headbarHomeAdmin">
        <div className="child1a">
          <MdAccountCircle className="iconStylea" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childa">
          <MdPermPhoneMsg className="iconStylea" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childa">
          <ImLocation className="iconStylea" />
          <a href="#">Localisation</a>
        </div>
        <div className="childa">
          <BsInfoSquareFill className="iconStylea" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomeAdmin">
        <div className="titlea">
          <ImDatabase className="iconStylea" />
          Gestion des comptes utilisateurs
          <ImDatabase className="iconStyle1a" />
        </div>
        <div className="gesa">
          <div className="herea">
            <ImUserPlus className="iconStylea"/>
            <a href="#">Ajout des comptes</a>
          </div>
          <div className="herea">
            <ImUserMinus className="iconStylea"/>
            <a href="#">Suppression des comptes</a>
          </div>
          <div className="herea">
            <ImUsers className="iconStylea"/>
            <a href="#">Tous les utilisateurs</a>
          </div>
          <div className="herea">
            <ImHistory className="iconStylea"/>
            <a href="#">Historique des mise-à-jours</a>
          </div>
        </div>
      </div>
      <div className="footerHomeAdmin">this is footer</div>
    </div>
  );
}

export default HomeAdmin;
