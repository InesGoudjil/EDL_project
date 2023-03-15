import React from "react";
import HeadSide from "../HeadSide";
import "./Suppression.css";


function Suppression() {
  return (
    <HeadSide>
    <div className="supp_all">
      {/* <Header></Header> */}
      <div className="containerr_">
       <div className="selecter">
       <select className="pick_inside_select">
          <option>Supprimer compte pour:</option>
          <option value="">Pour Enseignant</option>
          <option value="">Pour Condidat</option>
          <option value="">Pour Vice-doyen</option>
          <option value="">Pour Président CFD</option>
          <option value="">Pour Administrateur</option>
        </select>
       </div>
        <div className="pick_inside">
          <table className="supr">
            <tr>
              <th>Compte ID</th>
              <th>Propriétaire</th>
              <th>Date de création</th>
              <th>Suppression</th>
            </tr>
            
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>
                <button className="supbtn">Supprimer le compte</button>
              </td>
            </tr>
         
          
          </table>
        </div>
      </div>
    </div>
    </HeadSide>
  );
}

export default Suppression;
