import React from "react";
import "./AffecterEns.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import Select from "react-select";
import zIndex from "@mui/material/styles/zIndex";

function AffecterEns() {
  const specs = [
    {
      value: "tlsi",
      label: "Technologies des Logiciels et des Systèmes d’Information",
    },
    { value: "ifa", label: "Informatique Fondamentale et ses Applications" },
    { value: "tcli", label: "Tronc Commun INFO : Licence Informatique" },
  ];

  const enseignants = [
    { value: "en1", label: "Manel Amel Djenouhat" },
    { value: "en2", label: "Sahar Smaali" },
    { value: "en3", label: "Ahmed Taki Eddine Dib" },
    { value: "en4", label: "Ramdane Maamri" },
    { value: "en5", label: "Faiza Belala" },
    { value: "en", label: "Fateh Latreche" },
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
        <div className="affcetens"></div>
        <div className="fltre">
          <Select placeholder="Spécialité" options={specs} className="spe" />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID Copie</th>
              <th>Enseignant 1</th>
              <th>Enseignant 2</th>
              <th>Affectation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
            <tr>
              <td>986543</td>
              <td>
                {/* <Select
                  placeholder="Choisir"
                  options={enseignants}
                  className="choens"
                /> */}
                <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
              <div class="select">
                  <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                  </select>
                </div>
              </td>
              <td>
                <button type="submit" className="afct">Affecter</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="footerHomecfd">this is footer</div> */}
    </div>
  );
}

export default AffecterEns;
