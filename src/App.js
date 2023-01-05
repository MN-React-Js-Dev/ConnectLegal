
import './App.css';
import './assets/css/fontawesome.css'
import './assets/css/templatemo-space-dynamic.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Header from './Component/Navbar/Header';
import Footer from './Component/Navbar/Footer';
import LookingForLawyerSection from './Component/LookingForLawyerSection';
import WhyRegister from './Component/WhyRegister';
import ServicesContainer from './Component/ServicesContainer';
import FindLeagalServices from './Component/FindLeagalServices';
import FirstContainer from './Component/FirstContainer';
import SecondContainer from './Component/SecondContainer';
import Thirdcontainer from './Component/Thirdcontainer';


function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <FirstContainer />
      <SecondContainer />
      <Thirdcontainer />
      <FindLeagalServices />
      <LookingForLawyerSection />
      {/* <WhyRegister /> */}
      {/* <ServicesContainer /> */}
      <br />
      <br />
      <br />
      <br />
      <Footer />

    </>
  );
}

export default App;
