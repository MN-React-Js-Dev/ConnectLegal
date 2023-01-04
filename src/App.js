import logo from './logo.svg';
import './App.css';
import './assets/css/fontawesome.css'
import './assets/css/templatemo-space-dynamic.css'
import './assets/css/animated.css'
import './assets/css/owl.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Header from './Component/Navbar/Header';
import ServicesContainer from './Component/ServicesContainer';


function App() {
  return (
    <>
      <Header/>
      <ServicesContainer />
    </>
  );
}

export default App;
