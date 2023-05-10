import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeAdmin from "./HomeAdmin";

function LayoutAdmin(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="#" element={<HomeAdmin/>}></Route>
                
            </Routes>
        </BrowserRouter>
       
    );
}

export default LayoutAdmin;