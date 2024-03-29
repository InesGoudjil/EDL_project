import React from "react";
import "./AjouterCfd.css";
import { ImUserPlus } from "react-icons/im";
import Select from "react-select";
import { TextField } from "@mui/material";
import axios from "axios";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";

function AjouterCfd() {
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
  function handleTel(event) {
    setTel(event.target.value);
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

  return (
    <div className="addcfd">
      <div className="addingcfdformcontainer">
        <form className="addingcfdform">
          <div className="contcfd">
            <div className="compcfd">
              <ImUserPlus className="iconcfd" />
            </div>
            <div className="compcfd">
              <p className="pcfd">Ajouter Président CFD</p>
            </div>
            <div className="linecfd">
              <div className="cfdsection">
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Nom"
                  variant="standard"
                  defaultValue={nom}
                  onChange={(event) => {
                    handleNom(event);
                  }}
                />
              </div>
              <div className="cfdsection">
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Prénom"
                  variant="standard"
                  defaultValue={prenom}
                  onChange={(event) => {
                    handlePrenom(event);
                  }}
                />
              </div>
            </div>
            <div className="linecfd">
              <div className="cfdsection">
                <TextField
                  type="date"
                  id="standard-basic"
                  className="datecfd"
                  variant="standard"
                  defaultValue={dns}
                  onChange={(event) => {
                    handleDns(event);
                  }}
                />
              </div>
              <div className="cfdsection">
                <TextField
                  type="email"
                  id="standard-basic"
                  className="cfd"
                  label="@ E-mail"
                  variant="standard"
                  defaultValue={email}
                  onChange={(event) => {
                    handleEmail(event);
                  }}
                />
              </div>
            </div>
            {/* <div className="linecfd">
              <div className="cfdsection">
                <Select
                  placeholder="Module"
                  options={optionsmod}
                  className="cfd"
                  defaultValue={optionsmod}
                  //   onChange={(event) => {
                  //     handleModule(event);
                  //   }}
                />
              </div>
              <div className="cfdsection">
                <Select
                  placeholder="Spécialité"
                  options={optionsspec}
                  className="cfd"
                  defaultValue={optionsspec}
                  //   onChange={(event) => {
                  //     handleSpecialite(event);
                  //   }}
                />
              </div>
            </div> */}
            <div className="linecfd">
              <div className="cfdsection">
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Nom d'utilisateur"
                  variant="standard"
                  defaultValue={nom_util}
                  onChange={(event) => {
                    handleNom_util(event);
                  }}
                />
              </div>
              <div className="cfdsection">
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Mot de passe"
                  variant="standard"
                  defaultValue={mdp}
                  onChange={(event) => {
                    handleMDP(event);
                  }}
                />
              </div>
            </div>
            <div className="linecfd">
              <TextField
                type="number"
                id="standard-basic"
                className="cfd"
                label="Numéro de téléphone"
                variant="standard"
                defaultValue={tel}
                onChange={(event) => {
                  handleTel(event);
                }}
              />
            </div>
            <div className="linecfd">
              <button className="btncfd" variant="" type="submit">
                Créer compte
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AjouterCfd;
