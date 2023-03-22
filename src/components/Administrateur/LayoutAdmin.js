import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AjouterAdmin from "./AjouterAdmin";
import AjouterCandidat from "./AjouterCandidat";
import AjouterCFD from "./AjouterCFD";
import HomeAdmin from "./HomeAdmin";
import Suppression from "./Suppression";

function LayoutAdmin(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/adminLayout/test" element={<AjouterAdmin/>}></Route>
                {/* <Route path="/ajoutAdmin" element={<AjouterAdmin/>}></Route> */}
                <Route path="/suppAdmin" element={<Suppression/>}></Route>
                <Route path="/ajoutCand" element={<AjouterCandidat/>}></Route>
                <Route path="/ajoutCFD" element={<AjouterCFD/>}></Route>
                <Route path="/homeAdmin" element={<HomeAdmin/>}></Route>
            </Routes>
        </BrowserRouter>
       
    );
}

export default LayoutAdmin;