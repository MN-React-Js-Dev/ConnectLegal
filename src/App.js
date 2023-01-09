
import './App.css';
import './assets/css/fontawesome.css'
import './assets/css/templatemo-space-dynamic.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Header from './Component/Navbar/Header';
import Footer from './Component/Navbar/Footer';
import LookingForLawyerSection from './Component/LookingForLawyerSection';
import WhyRegister from './Component/WhyRegister';
import FindLeagalServices from './Component/FindLeagalServices';
import FirstContainer from './Component/FirstContainer';
import SecondContainer from './Component/SecondContainer';
import Thirdcontainer from './Component/Thirdcontainer';
import ClientContainer from './Component/ClientContainer';
import ProServicesContainer from './Component/ProServicesContainer';
import Home from './Component/Home/Home';
import Register from './Component/Register';


function App() {
  return (
    <>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <Thirdcontainer />
      <Home />
      <FindLeagalServices />
      {/* <ProServicesContainer /> */}
      {/* <ClientContainer /> */}
      {/* <LookingForLawyerSection /> */}
      
      {/* <Home/> */}
      {/* <FindLeagalServices /> */}
      {/* <LookingForLawyerSection /> */}
      
      <ProServicesContainer />
      <ClientContainer />
      <Register />  
      <WhyRegister/>  
      <Footer />
    </>
  );
}

export default App;
