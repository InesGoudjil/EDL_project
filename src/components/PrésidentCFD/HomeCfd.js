import React from "react";
import "./HomeCfd.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import {ImClipboard} from "react-icons/im";
import {ImUsers} from "react-icons/im"
import {ImPlus} from "react-icons/im";
import {BsInfoSquareFill} from "react-icons/bs";
import {BiError} from "react-icons/bi";

function HomeCfd() {
  return (
    <div className="allHomecfd">
      <div className="headHomecfd">
        <FaUniversity className="bigIconStylecfd"/>
        BienVenue Président CFD :)
      </div>

      <div className="headbarHomecfd">
        <div className="child1cfd">
          <MdAccountCircle className="iconStylecfd" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childcfd">
          <MdPermPhoneMsg className="iconStylecfd" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childcfd">
          <ImLocation className="iconStylecfd" />
          <a href="#">Localisation</a>
        </div>
        <div className="childcfd">
          <BsInfoSquareFill className="iconStylecfd" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomecfd">
        <div className="titlecfd">
          <ImPencil className="iconStylecfd" />
          Gestion des Notes
          <ImPencil className="iconStyle1cfd" />
        </div>
        <div className="gescfd">
          <div className="herecfd">
            <ImClipboard className="iconStylecfd"/>
            <a href="#">Affectation des Listes des Résultats</a>
          </div>
          <div className="herecfd">
            <ImPlus className="iconStylecfd"/>
            <a href="#">Affectation des Enseignants pour les corrections des copies</a>
          </div>
          <div className="herecfd">
            <BiError className="iconStylecfd"/>
            <a href="#">Cas d'affecter un 3ème enseignants</a>
          </div>
        </div>
      </div>
      {/* <div className="footerHomecfd">this is footer</div> */}
    </div>
  );
}

export default HomeCfd;
