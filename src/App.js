import logo from './logo.svg';
import './App.css';
import './assets/css/fontawesome.css'
import './assets/css/templatemo-space-dynamic.css'
import './assets/css/animated.css'
import './assets/css/owl.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Header from './Component/Navbar/Header';
import Footer from './Component/Navbar/Footer';
import LookingForLawyerSection from './Component/LookingForLawyerSection';
import WhyRegister from './Component/WhyRegister';
import ServicesContainer from './Component/ServicesContainer';


function App() {
  return (
    <>
      <Header/>
      <LookingForLawyerSection/>
      <WhyRegister/>
      <ServicesContainer />
      <Footer/>
    </>
  );
}

export default App;
