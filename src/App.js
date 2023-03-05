import './App.css';
import  Container  from './components/Container';
import HomeAdmin from './components/Administrateur/HomeAdmin';
import GestionCpt from './components/Administrateur/GestionCpt';
import AjouterEns from './components/Administrateur/AjouterEns';

function App() {
  return (
    <div className='App'>
      {/* <Container></Container> */}
      {/* <HomeAdmin></HomeAdmin> */}
      {/* <GestionCpt></GestionCpt> */}
      <AjouterEns></AjouterEns>
    </div>
  );
}

export default App;
