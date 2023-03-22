import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./Administrateur/LayoutAdmin";
import Container from "./Container";
import LoginPage from "./LoginPage";

function AppLayout() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container></Container>}></Route>
                <Route path="/adminLayout" element={<LayoutAdmin></LayoutAdmin>}></Route>

            </Routes>
        </BrowserRouter>
        // <div>adzdad</div>
    )
}

export default AppLayout;
