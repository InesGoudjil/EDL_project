import './App.css';
import  Container  from './components/Container';
import HomeAdmin from './components/Administrateur/HomeAdmin';
import GestionCpt from './components/Administrateur/GestionCpt';
import AjouterEnsVice from './components/Administrateur/AjouterEnsVice';
import AjouterCandidat from './components/Administrateur/AjouterCandidat';
import AjouterCFD from './components/Administrateur/AjouterCFD';
import AjouterAdmin from './components/Administrateur/AjouterAdmin';

function App() {
  return (
    <div className='App'>
      {/* <Container /> */}
      {/* <HomeAdmin /> */}
      {/* <GestionCpt /> */}
      {/* <AjouterEnsVice /> */}
      {/* <AjouterCandidat /> */}
      <AjouterCFD />
      {/* <AjouterAdmin /> */}
    </div>
  );
}

export default App;
