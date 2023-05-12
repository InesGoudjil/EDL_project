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
import ConsulterProfileAdmin from "./Administrateur/ConsulterProfileAdmin";
import ConsulterProfileVice from "./ViceDoyen/ConsulterProfilVice";
import HomeCfd from "./PrésidentCFD/HomeCfd";
import TableDeRes from "./PrésidentCFD/TableDeRes";
import AffecterEns from "./PrésidentCFD/AffecterEns";

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
      {/* <ConsulterProfileAdmin/> */}
      {/* <ConsulterProfileVice/> */}
      {/* <HomeCfd/> */}
      {/* <TableDeRes/> */}
      <AffecterEns/>
    </div>
  );
}

export default AppLayout;
