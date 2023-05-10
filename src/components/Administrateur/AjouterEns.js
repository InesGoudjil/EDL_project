import React from "react";
import "./AjouterEns.css";
import { ImUserPlus } from "react-icons/im";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";

function AjouterEns() {
  const optionsmod = [
    { value: "edl", label: "EDL" },
    { value: "svs", label: "SVS" },
    { value: "tml", label: "TML" },
  ];

  const optionsspec = [
    { value: "spec1", label: "SPEC1" },
    { value: "spec2", label: "SPEC2" },
    { value: "spec3", label: "SPEC3" },
  ];

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [dns, setDns] = useState();
  const [email, setEmail] = useState();
  const [module, setModule] = useState();
  const [specialite, setSpecialite] = useState();
  const [nom_util, setNom_util] = useState();
  const [mdp, setMdp] = useState();
  const [tel, setTel] = useState();

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
  //   function handleModule(event) {
  //     setModule(event.target.value);
  //     console.log(event.target.value);
  //   }
  //   function handleSpecialite(event) {
  //     setSpecialite(event.target.value);
  //     console.log(event.target.value);
  //   }
  function handleNom_util(event) {
    setNom_util(event.target.value);
    console.log(event.target.value);
  }
  function handleMDP(event) {
    setMdp(event.target.value);
    console.log(event.target.value);
  }
  function handleTel(event) {
    setTel(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="addens">
      <div className="addingensformcontainer">
        <form className="addingensform">
          <div className="contae">
            <div className="compae">
              <ImUserPlus className="iconae" />
            </div>
            <div className="compae">
              <p className="pae">Ajouter Enseignant</p>
            </div>
            <div className="lineae">
              <div className="aesection">
                <TextField
                  id="standard-basic"
                  className="ae"
                  label="Nom"
                  variant="standard"
                  defaultValue={nom}
                  onChange={(event) => {
                    handleNom(event);
                  }}
                />
              </div>
              <div className="aesection">
                <TextField
                  id="standard-basic"
                  className="ae"
                  label="Prénom"
                  variant="standard"
                  defaultValue={prenom}
                  onChange={(event) => {
                    handlePrenom(event);
                  }}
                />
              </div>
            </div>
            <div className="lineae">
              <div className="aesection">
                <TextField
                  type="date"
                  id="standard-basic"
                  className="dateae"
                  variant="standard"
                  defaultValue={dns}
                  onChange={(event) => {
                    handleDns(event);
                  }}
                />
              </div>
              <div className="aesection">
                <TextField
                  type="email"
                  id="standard-basic"
                  className="ae"
                  label="@ E-mail"
                  variant="standard"
                  defaultValue={email}
                  onChange={(event) => {
                    handleEmail(event);
                  }}
                />
              </div>
            </div>
            <div className="lineae">
              <div className="aesection">
                <Select
                  placeholder="Module"
                  options={optionsmod}
                  className="ae"
                  defaultValue={optionsmod}
                  //   onChange={(event) => {
                  //     handleModule(event);
                  //   }}
                />
              </div>
              <div className="aesection">
                <Select
                  placeholder="Spécialité"
                  options={optionsspec}
                  className="ae"
                  defaultValue={optionsspec}
                  //   onChange={(event) => {
                  //     handleSpecialite(event);
                  //   }}
                />
              </div>
            </div>
            <div className="lineae">
              <div className="aesection">
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
              <div className="aesection">
                <TextField
                  id="standard-basic"
                  className="ae"
                  label="Mot de passe"
                  variant="standard"
                  defaultValue={mdp}
                  onChange={(event) => {
                    handleMDP(event);
                  }}
                />
              </div>
            </div>
            <div className="lineae">
              <TextField
                type="number"
                id="standard-basic"
                className="ae"
                label="Numéro de téléphone"
                variant="standard"
                defaultValue={mdp}
                onChange={(event) => {
                  handleTel(event);
                }}
              />
            </div>
            <div className="lineae">
              <button className="btnae" variant="" type="submit">
                Créer compte
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AjouterEns;
