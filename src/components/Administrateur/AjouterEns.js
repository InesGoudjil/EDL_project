import React from "react";
import "./AjouterEns.css";

import { TextField } from "@mui/material";

import { useState } from "react";

function AjouterEns() {
  return (
    <div className="all">
      <form className="ajout_form">

        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="inptt"
            label="Nom"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="inptt"
            label="Prénom"
            variant="standard"
          />
        </div>
        
        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="inptt"
            label="Date de Naissance"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="inptt"
            label="Spécialité"
            variant="standard"
          />
        </div>

        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="inptt"
            label="Nom d'utilisateur"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            className="inpt"
            label="Mot de passe"
            variant="standard"
          />
        </div>
        <div className="inpsec">
            <button className="btn" type="submit">Ajouter Enseignant</button>

        </div>
        
      </form>
    </div>
  );
}

export default AjouterEns;
