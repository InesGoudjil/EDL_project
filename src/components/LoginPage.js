import React from "react";
import "./LoginPage.css";

function loginPage() {
  return (
    <div className="all_loginpage">
        <h1>Bienvenue</h1>
        <h3>ACCEDER A VOTRE COMPTE</h3>
      <form className="form_login">
        <div className="div_section">
          <label className="lbl">Nom d'Utilisateur:</label>
          <br />
          <input className="inp" type="text" placeholder="nom d'utilisateur" />
        </div>

        <div className="div_section">
          <label className="lbl">Mot de Passe:</label>
          <br />
          <input className="inp" type="text" placeholder="mot de passe" />
        </div>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
}

export default loginPage;
