import React from "react";
import "./ConsulterProfile.css";

import { FaUniversity } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";

function ConsulterProfile() {
  return (
    <div className="ceditprofiladmin">
      <div className="cheadHomeAdmin">
        <FaUniversity className="cbigIconStylea" />
        BienVenue Administrateur :)
      </div>

      <div className="cheadbarHomeAdmin">
        <div className="cchild1a">
          <MdAccountCircle className="ciconStylea" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="cchilda">
          <MdPermPhoneMsg className="ciconStylea" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="cchilda">
          <ImLocation className="ciconStylea" />
          <a href="#">Localisation</a>
        </div>
        <div className="cchilda">
          <BsInfoSquareFill className="ciconStylea" />
          <a href="#">A Propos</a>
        </div>
      </div>
      <div className="aeditprofile">
        <h2 className="etitle">Modifier Votre Profile</h2>
        <form className="aeditprofilform">
          <div className="esection">
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
          </div>
          <div className="esection">
            <label className="element">Nom d'Utilisateur : </label>
            <input className="profileinfo" placeholder="nom d'utilisateur" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
          <div className="esection">
            <label className="element">mot de passe : </label>
            <input className="profileinfo" placeholder="passe" />
            <button className="op" >Modifier</button>
            <button className="op" >Confirmer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsulterProfile;
