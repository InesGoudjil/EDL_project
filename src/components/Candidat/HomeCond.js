import React from "react";
import "./HomeCond.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";

import {ImFileText} from "react-icons/im"

import {BsInfoSquareFill} from "react-icons/bs";

function HomeCond() {
  return (
    <div className="allHomeAdmin">
      <div className="headHomeAdmin">
        <FaUniversity className="bigIconStylea"/>
        BienVenue Candidat :)
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
          <ImFileText className="iconStylea" />
          <a href="#">Consulter la Liste des Résultats</a>
          <ImFileText className="iconStyle1a" />
        </div>
        <div className="titlea">
          {/* <ImFileText className="iconStylea" /> */}
          <a href="#">Consulter les Informations partagées par le ViceDoyen</a>
          {/* <ImFileText className="iconStyle1a" /> */}
        </div>
        
        
      </div>
    </div>
  );
}

export default HomeCond;
