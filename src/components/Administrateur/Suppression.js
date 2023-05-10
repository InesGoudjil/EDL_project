import React from "react";
import "./Suppression.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { BsInfoSquareFill } from "react-icons/bs";
import Select from "react-select";
import { AiFillDelete } from "react-icons/ai";

function Suppression() {
  const users = [
    { value: "ens", label: "Comptes des Enseignants" },
    { value: "etu", label: "Comptes des Etudiants" },
    { value: "vice", label: "Comptes des Vice-Doyens" },
    { value: "cfd", label: "Comptes des Présidents CFD" },
  ];

  return (
    <div className="allHomeAdmins">
      <div className="headHomeAdmins">
        <FaUniversity className="bigIconStyles" />
        BienVenue Administrateur :)
      </div>

      <div className="headbarHomeAdmins">
        <div className="child1s">
          <MdAccountCircle className="iconStyles" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childs">
          <MdPermPhoneMsg className="iconStyles" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childs">
          <ImLocation className="iconStyles" />
          <a href="#">Localisation</a>
        </div>
        <div className="childs">
          <BsInfoSquareFill className="iconStyles" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomeAdmins">
        <div className="titles">
          <ImDatabase className="iconStyles" />
          Suppression des Comptes
          <ImDatabase className="iconStyle1s" />
        </div>
      </div>
      <div className="fltr">
        <Select
          placeholder="Filtrer"
          options={users}
          className="s"
          //   defaultValue={users}
          //   onChange={(event) => {
          //     handleSpecialite(event);
          //   }}
        />
      </div>
      <table class="styled-table">
        <thead>
          <tr className="tableheading">
            <th>Selectionner</th>
            <th>User ID</th>
            <th>Email</th>
            <th>Propriétaire</th>
            <th>Suppression</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr class="active-row">
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr class="active-row">
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr class="active-row">
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr class="active-row">
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
          <tr class="active-row">
            <td>
              <input className="checkbox" type="checkbox" />
            </td>
            <td>029451</td>
            <td>test@test.com</td>
            <td>aymenBen</td>
            <td>
              <button className="delete" type="">
                <AiFillDelete className="deleteicon" />
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="deleteall" type="">
        <AiFillDelete className="deleteicon" />
        Supprimer Selecionnés
      </button>
      {/* <div className="footerHomeAdmins">this is footer</div> */}
    </div>
  );
}

export default Suppression;
