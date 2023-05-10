import React from "react";
import Container from "./Container";
import HomeVice from "./ViceDoyen/HomeVice";
import HomeAdmin from "./Administrateur/HomeAdmin";
import AjouterEns from "./Administrateur/AjouterEns";
import AjouterVice from "./Administrateur/AjouterVice";
import AjouterEtu from "./Administrateur/AjouterEtu";
import AjouterCfd from "./Administrateur/AjouterCfd";
import Choix from "./Administrateur/Choix";
import Suppression from "./Administrateur/Suppression";
import ConsulterProfile from "./Administrateur/ConsulterProfile";

function AppLayout() {
  return (
    <div>
      {/* <Container /> */}
      {/* <HomeAdmin /> */}
      {/* <HomeVice/> */}
      {/* <AjouterEns/> */}
      {/* <AjouterVice/> */}
      {/* <AjouterEtu/> */}
      {/* <AjouterCfd /> */}
      {/* <Choix/> */}
      {/* <Suppression/> */}
      <ConsulterProfile />
    </div>
  );
}

export default AppLayout;
