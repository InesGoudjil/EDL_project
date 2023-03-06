import React from "react";
import "./AjouterAdmin.css";

import Form from "react-bootstrap/Form";

import { TextField } from "@mui/material";
import icon from "../admin.png";
import { useState } from "react";

function AjouterAdmin() {
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [dns, setDns] = useState();
//   const [spec, setSpec] = useState();
  const [nom_util, setNomU] = useState();
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
//   function handleSpec(event) {
//     setSpec(event.target.value);
//     console.log(event.target.value);
//   }
  function handleNomU(event) {
    setNomU(event.target.value);
    console.log(event.target.value);
  }
  function handleMdp(event) {
    setMdp(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="all">
      <form className="ajout_form">
        <div className="inspec">
          <img className="user_icon" src={icon} alt="icon" />
        </div>
        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="input_"
            label="Nom"
            variant="standard"
            defaultValue={nom}
            onChange={(event) => {
              handleNom(event);
            }}
          />
          <TextField
            id="standard-basic"
            className="input_"
            label="Prénom"
            variant="standard"
            defaultValue={prenom}
            onChange={(event) => {
              handlePrenom(event);
            }}
          />
        </div>

        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="input_"
            // label="Date de Naissance"
            variant="standard"
            type="date"
            defaultValue={dns}
            onChange={(event) => {
              handleDns(event);
            }}
          />
          {/* <Form.Select
            aria-label="Default select example"
            className="input_"
            defaultValue={spec}
            onChange={(event) => {
              handleSpec(event);
            }}
          >
            <option>Spécialité enseignée</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
        </div>

        <div className="inpsec">
          <TextField
            id="standard-basic"
            className="input_"
            label="Nom d'utilisateur"
            variant="standard"
            defaultValue={nom_util}
            onChange={(event) => {
              handleNomU(event);
            }}
          />
          <TextField
            id="standard-basic"
            className="input_"
            label="Mot de passe"
            variant="standard"
            // type='password'
            defaultValue={mdp}
            onChange={(event) => {
              handleMdp(event);
            }}
          />
        </div>
        <div className="inpsec">
          <button className="btn" type="submit">
            Créer Compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default AjouterAdmin;
