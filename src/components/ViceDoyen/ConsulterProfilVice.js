import React from "react";
import "./ConsulterProfileVice.css";

import { FaUniversity } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";

function ConsulterProfileVice() {
  return (
    <div className="editprofilvice">
      <div className="headHomevice">
        <FaUniversity className="bigIconStylev" />
        BienVenue Vice-Doyen :)
      </div>

      <div className="headbarHomevice">
        <div className="vchild1">
          <MdAccountCircle className="viconStyle" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="vchild">
          <MdPermPhoneMsg className="viconStyle" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="vchild">
          <ImLocation className="viconStyle" />
          <a href="#">Localisation</a>
        </div>
        <div className="vchild">
          <BsInfoSquareFill className="viconStyle" />
          <a href="#">A Propos</a>
        </div>
      </div>
      <div className="veditprofile">
        <h2 className="vtitle">Modifier Votre Profile</h2>
        <form className="veditprofilform">
          {/* <div className="esection">
            <label className="element">Nom : </label>
            <input className="profileinfo" placeholder="nom" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
          <div className="esection">
            <label className="element">Prénom : </label>
            <input className="profileinfo" placeholder="prénom" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
          <div className="esection">
            <label className="element">Date de naissance : </label>
            <input className="profileinfo" placeholder="date de naissance" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
          <div className="esection">
            <label className="element">@ E-mail : </label>
            <input className="profileinfo" placeholder="e-mail" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
          <div className="esection">
            <label className="element">Téléphone : </label>
            <input className="profileinfo" placeholder="téléphone" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div> */}
          <div className="vsection">
            <label className="velement">Nom d'Utilisateur : </label>
            <input className="vprofileinfo" placeholder="nom d'utilisateur" />
            <button className="vop" >Modifier</button>
            <button className="vop" >Confirmer</button>
          </div>
          <div className="vsection">
            <label className="velement">mot de passe : </label>
            <input className="vprofileinfo" placeholder="passe" />
            <button className="vop" >Modifier</button>
            <button className="vop" >Confirmer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsulterProfileVice;
