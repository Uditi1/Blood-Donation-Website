import React from 'react';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Panel from "./components/Panel"
import AboutDonation from "./components/Aboutdonation"
import Footer from "./components/Footer"
import WLogin from './components/WLogin'
// import BloodBankCards from './components/BloodDonationSlider';
import Contact from "./components/Contact"
import WSignup from "./components/WSignup"
import BloodRequest from "./components/BloodRequest"
import AboutSection  from "./components/About"
// import BloodDonationMyths from './components/BloodDonationMyths';
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import MythFactCarousel from './components/MythFactCarousel';
import DonateBlood from './components/DonateBlood';
import BenefitsCarousel from './components/BenefitsCarousel';
// 
const App = () => {
  return (
    <>
    <Router>
      <div>
        <Nav />
        
            <Routes>
          <Route exact path="/" element={<div><Hero /><AboutDonation /><Panel/><AboutSection/></div>}> </Route>
          <Route path="/about" element={<BloodRequest/>} />
          <Route path="/LookingBlood" element={<BloodRequest/>} />
          <Route path="/Donor" element={<div><DonateBlood/></div>} />
          <Route path="/donation" element={ <Contact/>} />
          <Route path="/login" element={<WLogin/>}/>
          <Route path="/WSignup" element={<WSignup/>}/>
          <Route path="/Signup" element={<div><Hero /><AboutDonation /><Panel/></div>}/>
          {/* <Route path="/FindDonor" element={ <DonateBlood/> }/> */}
        </Routes>
      </div>
    </Router>
   
    <div className="container mx-auto py-8">
      <BenefitsCarousel />
    </div>
   
    <MythFactCarousel/>
       <Contact/>
  {/* <DonateBlood/> */}
   {/* <WDonorLogin/> */}
  {/* <BloodBankCards/> */}
   {/* <RegisterBloodBank/> */}
    {/* <Footer/> */}
    </>
  );
}
export default App;