import React from "react";
import "./LoginPage.css";

import { useState } from "react";

import { TextField } from "@mui/material";
import axios from "axios";

function LoginPage() {
  const [nom, setNom] = useState();
  const [mdp, setMdp] = useState();

  function handleNom(event) {
    setNom(event.target.value);
    console.log(event.target.value);
  }

  function handleMdp(event) {
    setMdp(event.target.value);
    console.log(event.target.value);
  }

  function login(event) {
    event.preventDefault();
    axios
      .get("http://192.168.43.95:5246/Login", {
        params: {
          username: nom,
          password: mdp,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }
  return (
    <div className="all_loginpage">
      <div className="salutation"></div>
      <form className="form_login">
        <div className="input_section">
          <TextField
            id="standard-basic"
            className="inp"
            label="Nom d'Utilisateur"
            variant="standard"
            defaultValue={nom}
            onChange={(event) => {
              handleNom(event);
            }}
          />
        </div>

        <div className="input_section">
          <TextField
            id="standard-basic"
            className="inp"
            label="Mot de Passe"
            variant="standard"
            type="password"
            defaultValue={mdp}
            onChange={(event) => {
              handleMdp(event);
            }}
          />
        </div>
        <div className="input_section">
          <button
            className="btn"
            onClick={(event) => {
              login(event);
            }}
            type="submit"
          >
            Se Connecter
          </button>
        </div>
        <div className="input_section">
          <a href="" target="_blanc">
            Mot de passe oublié ?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
