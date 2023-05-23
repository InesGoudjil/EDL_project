import React from "react";
import "./HomeVice.css";
import { MdAccountCircle } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdGesture } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaSlideshare } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { TextField } from "@mui/material";

function HomeVice() {
  return (
    // <HeadSide>
    //   <div className="container_">
    //     dezdzdz
    //   </div>
    //   </HeadSide>
    <div className="allHomeVice">
      <div className="headHomeVice">
        <FaUniversity className="bigIconStylev" />
        {/* <img className="logo_header" src={logo} alt="logo" /> */}
        BienVenue Vice-Doyen :)
      </div>

      <div className="headbarHomeVice">
        <div className="child1v">
          <MdAccountCircle className="iconStylev" />
          <a href="#">Mon Profile</a>
        </div>
        <div className="childv">
          <MdPermPhoneMsg className="iconStylev" />
          <a href="#">Contactez-nous</a>
        </div>
        <div className="childv">
          <ImLocation className="iconStylev" />
          <a href="#">Localisation</a>
        </div>
        <div className="childv">
          <BsInfoSquareFill className="iconStylev" />
          <a href="#">A Propos</a>
        </div>
      </div>

      <div className="bodyHomeVice">
        <div className="titlev">
          <FaSlideshare className="iconStylev" />
          Partage des Informations
          <FaSlideshare className="iconStyle1v" />
        </div>
        <div className="herevv">
          <BsFillCalendar2DateFill className="iconStylev" />
          <label>
            Date du concours
            {/* <textarea name="postContent" rows={4} cols={40}></textarea> */}
          </label>
          <div>
            <TextField type="date" className="mydatev"></TextField>
          </div>
        </div>
        <div className="gesv">
          <div className="herev">
            <ImLocation className="iconStylev" />
            <label>
              Lieu du concours
              <textarea name="postContent" rows={4} cols={40}></textarea>
            </label>
          </div>
          <div className="herev">
            <IoIosPeople className="iconStylev" />
            <label>
              Enseignants résponsables
              <textarea name="postContent" rows={4} cols={40}></textarea>
            </label>
          </div>
          <div className="herev">
            <MdGesture className="iconStylev" />
            <label>
              Gestion des codes
              <textarea name="postContent" rows={4} cols={40}></textarea>
            </label>
          </div>
        </div>
        <div className="gesv">
          <button className="submitingInfo" type="submit">
            Partager
          </button>
        </div>
      </div>
      {/* <div className="footerHomeVice">this is footer</div> */}
    </div>
  );
}

export default HomeVice;
