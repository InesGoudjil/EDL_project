import React from "react";
import "./ConsulterProfileVice.css";

import { FaUniversity } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { TextField } from "@mui/material";

function ConsulterProfileVice() {
  return (
    <div className="ceditprofiladmin">
      <div className="cheadHomeAdmin">
        <FaUniversity className="cbigIconStylea" />
        BienVenue Vice-Doyen :)
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
              defaultValue="+213 7 79 93 98 33"
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
              defaultValue="pottato gurl"
              className="chann"
            />
            <TextField
              required
              id="outlined-required"
              label="Mot de Passe"
              defaultValue="aa123456789"
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

export default ConsulterProfileVice;
