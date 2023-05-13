import React from "react";
import "./Correction.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { TextField } from "@mui/material";
import { BsInfoSquareFill } from "react-icons/bs";
import { useState } from "react";

function Correction() {
  const [note, setNote] = useState();

  function handleNote(event) {
    setNote(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="allHomeEns">
      <div className="headHomeEns">
        <FaUniversity className="bigIconStyleens" />
        BienVenue Enseignant :)
      </div>

      <div className="headbarHomeEns">
        <div className="child1ens">
          <MdAccountCircle className="iconStyleens" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childens">
          <MdPermPhoneMsg className="iconStyleens" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childens">
          <ImLocation className="iconStyleens" />
          <a href="#">Localisation</a>
        </div>
        <div className="childens">
          <BsInfoSquareFill className="iconStyleens" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomeEns">
        <table className="aff">
          <thead>
            <tr>
              <th>ID copie</th>
              <th>Note/20</th>
              <th>Soumission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
            <tr>
              <td>4553669</td>
              <td>
                <TextField
                  id="standard-basic"
                  className="cfd"
                  label="Note ici"
                  variant="standard"
                  defaultValue={note}
                  onChange={(event) => {
                    handleNote(event);
                  }}
                />
              </td>
              <td>
                <button className="subb" type="submit">
                  Soumettre
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="footerHomeEns">this is footer</div> */}
    </div>
  );
}

export default Correction;
