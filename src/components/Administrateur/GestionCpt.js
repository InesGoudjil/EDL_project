import React from "react";
import "./GestionCpt.css";
import Header from "../Header";
import SideBar from "../SideBar";

function GestionCpt() {
  return (
    <div className="gestion_all">
      <Header></Header>
      {/* <SideBar></SideBar> */}
      <div className="container___">
      {/* <div className="title">
        <h2>Gestion des comptes:</h2>
      </div> */}
        <div className="ajout">
          <div className="ajout_sec">
            <h3>Ajout des comptes</h3>
          </div>
          <div>
          <select className="ajout_sec">
            <option value="">Pour Enseignant</option>
            <option value="">Pour Condidat</option>
            <option value="">Pour Vice-doyen</option>
            <option value="">Pour Président CFD</option>
            <option value="">Pour Administrateur</option>
          </select>
          </div>
          
        </div>
        <div className="suppression">
          <div className="suppression_sec">
            <h3>Suppression des comptes</h3>
          </div>
          <div>
          <select className="suppression_sec">
            <option value="">Pour Enseignant</option>
            <option value="">Pour Condidat</option>
            <option value="">Pour Vice-doyen</option>
            <option value="">Pour Président CFD</option>
            <option value="">Pour Administrateur</option>
          </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionCpt;
