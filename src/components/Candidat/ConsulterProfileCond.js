import React from "react";
import "./ConsulterProfileCond.css";

import { FaUniversity } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { TextField } from "@mui/material";

function ConsulterProfileCond() {
  return (
    <div className="ceditprofiladmin">
      <div className="cheadHomeAdmin">
        <FaUniversity className="cbigIconStylea" />
        BienVenue Candidat :)
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
        <h2 className="etitle">Consulter Votre Profile</h2>
        <form className="aeditprofilform">
          <div className="chan">
            <TextField
              id="outlined-read-only-input"
              label="Nom"
              defaultValue="GOUDJIL"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Prénom"
              defaultValue="Ines"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="chan">
            <TextField
              id="outlined-read-only-input"
              label="Date de naissance"
              defaultValue="06/06/2000"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="@E-mail"
              defaultValue="goudjilines25@gmail.com"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="chan">
            <TextField
              id="outlined-read-only-input"
              label="Téléphone"
              defaultValue="+213 x xx xx xx xx"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-read-only-input"
              label="Spécialité"
              defaultValue="TLSI"
              className="chann"
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="chan">
            <TextField
              required
              id="outlined-required"
              label="Nom d'Utilisateur"
              defaultValue="I am a user"
              className="chann"
            />
            <TextField
              required
              id="outlined-required"
              label="Mot de Passe"
              defaultValue="xyz010203"
              className="chann"
            />
          </div>
          <div className="submiteu">
            <button className="subbb">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConsulterProfileCond;
