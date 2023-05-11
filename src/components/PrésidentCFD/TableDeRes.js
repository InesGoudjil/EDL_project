import React from "react";
import "./TableDeRes.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { TextField } from "@mui/material";
import Select from "react-select";
import { BsInfoSquareFill } from "react-icons/bs";

function TableDeRes() {
  const specs = [
    {
      value: "tlsi",
      label: "Technologies des Logiciels et des Systèmes d’Information",
    },
    { value: "ifa", label: "Informatique Fondamentale et ses Applications" },
    { value: "tcli", label: "Tronc Commun INFO : Licence Informatique" },
  ];

  return (
    <div className="allHomecfd">
      <div className="headHomecfd">
        <FaUniversity className="bigIconStylecfd" />
        BienVenue Président CFD :)
      </div>

      <div className="headbarHomecfd">
        <div className="child1cfd">
          <MdAccountCircle className="iconStylecfd" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childcfd">
          <MdPermPhoneMsg className="iconStylecfd" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childcfd">
          <ImLocation className="iconStylecfd" />
          <a href="#">Localisation</a>
        </div>
        <div className="childcfd">
          <BsInfoSquareFill className="iconStylecfd" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomecfd">
        <div className="addingLine">
          <div className="fltre">
            <Select
              placeholder="Filtrer"
              options={specs}
              className="spe"
              //   defaultValue={users}
              //   onChange={(event) => {
              //     handleSpecialite(event);
              //   }}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Spécialité</th>
                <th>EDL</th>
                <th>TML</th>
                <th>SVS</th>
                <th>MSSI</th>
                <th>AQL</th>
                <th>Soumettre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
              <tr>
                <td>456210</td>
                <td>Ines</td>
                <td>GOUDJIL</td>
                <td>TLSI</td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  {/* <TextField
                    id="outlined-basic"
                    label="Note ici"
                    variant="outlined"
                    className="inputnote"
                  /> */}
                  <input className="inputnote" placeholder="note ici" />
                </td>
                <td>
                  <button type="submit" className="sub">
                    Ajouter
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="footerHomecfd">this is footer</div> */}
    </div>
  );
}

export default TableDeRes;
