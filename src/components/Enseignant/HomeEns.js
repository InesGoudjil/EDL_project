import React from "react";
import "./HomeEns.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaUniversity } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import {ImUserPlus} from "react-icons/im";
import{ImUserMinus} from "react-icons/im";
import {ImUsers} from "react-icons/im"
import {ImHistory} from "react-icons/im";
import {BsInfoSquareFill} from "react-icons/bs";

function HomeEns() {
  return (
    <div className="allHomeEns">
      <div className="headHomeEns">
        <FaUniversity className="bigIconStyleens"/>
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
        <div className="titleens">
          <ImCheckmark className="iconStyleens" />
          <a href="#">Corrections des copies</a>
          <ImCheckmark className="iconStyle1ens" />
        </div>
        
      </div>
      {/* <div className="footerHomeEns">this is footer</div> */}
    </div>
  );
}

export default HomeEns;
