
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


function App() {
  return (
    <>
      <Header />
      <LookingForLawyerSection />
      <FindLeagalServices/>
      {/* <WhyRegister /> */}
      {/* <ServicesContainer /> */}
      <Footer />
    </>
  );
}

export default App;
