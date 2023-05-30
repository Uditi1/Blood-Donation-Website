import React from 'react';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Panel from "./components/Panel"
import AboutDonation from "./components/Aboutdonation"
import Footer from "./components/Footer"
import WLogin from './components/WLogin'

import Contact from "./components/Contact"
import WSignup from "./components/WSignup"
import BloodRequest from "./components/BloodRequest"
import AboutSection  from "./components/About"

import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import MythFactCarousel from './components/MythFactCarousel';
import DonateBlood from './components/DonateBlood';
import BenefitsCarousel from './components/BenefitsCarousel';

import DonorList from './components/DonorList';
import Card from './components/Card';


import Myths from './components/Myths.jsx';

import Registert from "./components/Registert.jsx";
import Logint from "./components/Logint";

// 
const App = () => {
  return (
    <>
    <Router>
      <div>
        <Nav />
        
            <Routes>
          <Route exact path="/" element={<div><Hero /><AboutDonation /><Card/><Panel/><AboutSection/>  <div className="container mx-auto py-8"><BenefitsCarousel /></div> <MythFactCarousel/><div className="container mx-auto py-8"><Myths /></div> <Contact/></div>}> </Route>
          <Route path="/about" element={<AboutDonation/>} />
          <Route path="/LookingBlood" element={<BloodRequest/>} />
          <Route path="/DonorList" element={<DonorList/>} />
          <Route path="/donation" element={ <Contact/>} />
          <Route path="/DonateBlood" element={ <DonateBlood/>} />
          {/* <Route path="/login" element={<WLogin/>}/> */}
          <Route path="/WSignup" element={<WSignup/>}/>
          <Route path="/Signup" element={<div><Hero /><AboutDonation /><Panel/></div>}/>
          <Route path="/dLogin" element={<WLogin/>}/>
          <Route path="/DonateBlood" element={<DonateBlood/>}/>

           <Route path="/register" Component={Registert} />
            <Route path="/login" Component={Logint}/>

  
        </Routes>
      </div>
    </Router>
  
   
   
    
   {/* <Donor/> */}
       
  {/* <DonateBlood/> */}
   {/* <WDonorLogin/> */}
  {/* <BloodBankCards/> */}
   {/* <RegisterBloodBank/> */}
    {/* <Footer/> */}
    </>
  );
}
export default App;