import React from "react";
import "./AjouterEtu.css";
import { ImUserPlus } from "react-icons/im";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";

function AjouterEtu() {
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
    <div className="addetu">
      <div className="addingetuformcontainer">
        <form className="addingetuform">
          <div className="contat">
            <div className="compat">
              <ImUserPlus className="iconat" />
            </div>
            <div className="compat">
              <p className="pat">Ajouter Etudiant</p>
            </div>
            <div className="lineat">
              <div className="atsection">
                <TextField
                  id="standard-basic"
                  className="at"
                  label="Nom"
                  variant="standard"
                  defaultValue={nom}
                  onChange={(event) => {
                    handleNom(event);
                  }}
                />
              </div>
              <div className="atsection">
                <TextField
                  id="standard-basic"
                  className="at"
                  label="Prénom"
                  variant="standard"
                  defaultValue={prenom}
                  onChange={(event) => {
                    handlePrenom(event);
                  }}
                />
              </div>
            </div>
            <div className="lineat">
              <div className="aesection">
                <TextField
                  type="date"
                  id="standard-basic"
                  className="dateat"
                  variant="standard"
                  defaultValue={dns}
                  onChange={(event) => {
                    handleDns(event);
                  }}
                />
              </div>
              <div className="atsection">
                <TextField
                  type="email"
                  id="standard-basic"
                  className="at"
                  label="@ E-mail"
                  variant="standard"
                  defaultValue={email}
                  onChange={(event) => {
                    handleEmail(event);
                  }}
                />
              </div>
            </div>
            <div className="lineat">
              <div className="atsection">
                {/* <Select
                  placeholder="Module"
                  options={optionsmod}
                  className="at"
                  defaultValue={optionsmod}
                  //   onChange={(event) => {
                  //     handleModule(event);
                  //   }}
                /> */}
              </div>
              <div className="atsection">
                <Select
                  placeholder="Spécialité"
                  options={optionsspec}
                  className="at"
                  defaultValue={optionsspec}
                  //   onChange={(event) => {
                  //     handleSpecialite(event);
                  //   }}
                />
              </div>
            </div>
            <div className="lineat">
              <div className="atsection">
                <TextField
                  id="standard-basic"
                  className="at"
                  label="Nom d'utilisateur"
                  variant="standard"
                  defaultValue={nom_util}
                  onChange={(event) => {
                    handleNom_util(event);
                  }}
                />
              </div>
              <div className="atsection">
                <TextField
                  id="standard-basic"
                  className="at"
                  label="Mot de passe"
                  variant="standard"
                  defaultValue={mdp}
                  onChange={(event) => {
                    handleMDP(event);
                  }}
                />
              </div>
            </div>
            <div className="lineat">
              <TextField
                type="number"
                id="standard-basic"
                className="at"
                label="Numéro de téléphone"
                variant="standard"
                defaultValue={mdp}
                onChange={(event) => {
                  handleTel(event);
                }}
              />
            </div>
            <div className="lineat">
              <button className="btnat" variant="" type="submit">Créer compte</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AjouterEtu;
