import React from "react";
import "./Res.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";

import {ImFileText} from "react-icons/im"

import {BsInfoSquareFill} from "react-icons/bs";

function Res() {
  return (
    <div className="allHomeAdmin">
      <div className="headHomeAdmin">
        <FaUniversity className="bigIconStylea"/>
        BienVenue Condidat :)
      </div>

      <div className="headbarHomeAdmin">
        <div className="child1a">
          <MdAccountCircle className="iconStylea" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childa">
          <MdPermPhoneMsg className="iconStylea" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childa">
          <ImLocation className="iconStylea" />
          <a href="#">Localisation</a>
        </div>
        <div className="childa">
          <BsInfoSquareFill className="iconStylea" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomeCond">
        <table className="res">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>EDL</th>
                    <th>AQL</th>
                    <th>TML</th>
                    <th>SVS</th>
                    <th>MSSI</th>
                    <th>Moyenne/20</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
                <tr>
                    <td>45812369</td>
                    <td>GOUDJIL</td>
                    <td>Ines</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>44</td>
                    <td>54.33</td>
                </tr>
               
            </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Res;
