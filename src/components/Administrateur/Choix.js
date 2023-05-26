import React from "react";
import "./Choix.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import {BsInfoSquareFill} from "react-icons/bs";
import {ImUserTie} from "react-icons/im";

function Choix() {
  return (
    <div className="allChoixAdmin">
      <div className="headChoixAdmin">
        <FaUniversity className="bigIconStylec"/>
        BienVenue Administrateur :)
      </div>

      <div className="headbarChoixAdmin">
        <div className="child1c">
          <MdAccountCircle className="iconStylec" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childc">
          <MdPermPhoneMsg className="iconStylec" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childc">
          <ImLocation className="iconStylec" />
          <a href="#">Localisation</a>
        </div>
        <div className="childc">
          <BsInfoSquareFill className="iconStylec" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyChoixAdmin">
        <div className="titlec">
          <ImDatabase className="iconStylec" />
          Création des Comptes
          <ImDatabase className="iconStyle1c" />
        </div>
        <div className="gesc">
          <div className="herec">
            <ImUserTie className="iconStylec"/>
            <a href="#">Compte Enseignant</a>
          </div>
          <div className="herec">
            <ImUserTie className="iconStylec"/>
            <a href="#">Compte Vice-Doyen</a>
          </div>
          <div className="herec">
            <ImUserTie className="iconStylec"/>
            <a href="#">Compte Président CFD</a>
          </div>
          <div className="herec">
            <ImUserTie className="iconStylec"/>
            <a href="#">Compte Etudiant</a>
          </div>
        </div>
      </div>
      {/* <div className="footerChoixAdmin">this is footer</div> */}
    </div>
  );
}

export default Choix;
