import './App.css';
import  Container  from './components/Container';
import HomeAdmin from './components/Administrateur/HomeAdmin';
import GestionCpt from './components/Administrateur/GestionCpt';

function App() {
  return (
    <div className='App'>
      {/* <Container></Container> */}
      {/* <HomeAdmin></HomeAdmin> */}
      <GestionCpt></GestionCpt>
    </div>
  );
}

export default App;
