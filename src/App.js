import './App.css';
import LoginPage from './components/LoginPage.js';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <SideBar></SideBar>
      <LoginPage></LoginPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
