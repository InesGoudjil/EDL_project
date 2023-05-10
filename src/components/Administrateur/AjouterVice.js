import React from "react";
import "./AjouterVice.css";
import { ImUserPlus } from "react-icons/im";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";

function AjouterVice() {
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [dns, setDns] = useState();
  const [email, setEmail] = useState();
  const [nom_util, setNom_util] = useState();
  const [mdp, setMdp] = useState();

  function handleNom(event) {
    setNom(event.target.value);
    console.log(event.target.value);
  }
  function handlePrenom(event) {
    setPrenom(event.target.value);
    console.log(event.target.value);
  }
  function handleDns(event) {
    setDns(event.target.value);
    console.log(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function handleNom_util(event) {
    setNom_util(event.target.value);
    console.log(event.target.value);
  }
  function handleMDP(event) {
    setMdp(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="addav">
      <div className="addingviceformcontainer">
        <form className="addingviceform">
          <div className="contav">
            <div className="compav">
              <ImUserPlus className="iconav" />
            </div>
            <div className="compav">
              <p className="pav">Ajouter Vice-Doyen</p>
            </div>
            <div className="lineav">
              <div className="avsection">
                <TextField
                  id="standard-basic"
                  className="av"
                  label="Nom"
                  variant="standard"
                  defaultValue={nom}
                  onChange={(event) => {
                    handleNom(event);
                  }}
                />
              </div>
              <div className="avsection">
                <TextField
                  id="standard-basic"
                  className="av"
                  label="Prénom"
                  variant="standard"
                  defaultValue={prenom}
                  onChange={(event) => {
                    handlePrenom(event);
                  }}
                />
              </div>
            </div>
            <div className="lineav">
              <div className="avsection">
                <TextField
                  type="date"
                  id="standard-basic"
                  className="dateav"
                  variant="standard"
                  defaultValue={dns}
                  onChange={(event) => {
                    handleDns(event);
                  }}
                />
              </div>
              <div className="avsection">
                <TextField
                  type="email"
                  id="standard-basic"
                  className="av"
                  label="@ E-mail"
                  variant="standard"
                  defaultValue={email}
                  onChange={(event) => {
                    handleEmail(event);
                  }}
                />
              </div>
            </div>
            <div className="lineav">
              <div className="avsection">
                <TextField
                  id="standard-basic"
                  className="ae"
                  label="Nom d'utilisateur"
                  variant="standard"
                  defaultValue={nom_util}
                  onChange={(event) => {
                    handleNom_util(event);
                  }}
                />
              </div>
              <div className="avsection">
                <TextField
                  id="standard-basic"
                  className="av"
                  label="Mot de passe"
                  variant="standard"
                  defaultValue={mdp}
                  onChange={(event) => {
                    handleMDP(event);
                  }}
                />
              </div>
            </div>
            <div className="lineav">
              <button className="btnav" variant="" type="submit">
                Créer compte
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AjouterVice;
