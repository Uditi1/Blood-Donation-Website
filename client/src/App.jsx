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
          <Route path="/donation" element={ <Contact/>} />
          <Route path="/login" element={<WLogin/>}/>
          <Route path="/WSignup" element={<WSignup/>}/>
          <Route path="/Signup" element={<div><Hero /><AboutDonation /><Panel/></div>}/>
        </Routes>
      </div>
    </Router>
    
       <Contact/>
  
   {/* <WDonorLogin/> */}
  {/* <BloodBankCards/> */}
   {/* <RegisterBloodBank/> */}
    <Footer/>
    </>
  );
}
export default App;


