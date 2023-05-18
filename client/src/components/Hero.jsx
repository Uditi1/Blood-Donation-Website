import React from "react";
import Main from "./Images/Main.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-transparent" style={{backgroundImage: "url('\htdocs\Projects\Blood_Bank\Blood_bank_Web\src\components\Images')"}}>
      <div className="left-content m-8">
        {/* <h1 className="text-red-500 text-5xl font-bold mb-[-1] leading-8 text-xl ">
          Save Lives, Donate Blood
        </h1> */}
        <h1 className="text-4xl font-bold font-mono mb-[-1] leading-none text-red-500 ">
          Save Lives, Donate Blood
        </h1>
        <p className="text-xl font-bold mb-4 mt-4 ">
          <span className="text-red-600">Every donation</span> is critical and
          you can make a lifesaving difference. Blood donation improves or{" "}
          <span className="text-red-600">saves lives</span> and enhances social
          solidarity.
        </p>
        <Link  to="/LookingBlood" className="btn-1 bg-red-600 hover:bg-red-700 text-lg text-white font-bold py-3 px-4 rounded mb-4 mr-4">
          Looking for Blood
        </Link>
        <Link to="/DonorList" className="btn-2 bg-white hover:bg-red-600 text-white-600 font-bold py-3 px-4 border border-red-600 rounded mb-4">
          Donate Blood
        </Link>
      </div>
      <div className="right-img">
        <img
          src={Main}
          alt="Hero Image"
          className="mix-blend-darken max-w-full lg:max-w-none overflow-hidden mt-[-20px] "
        />
      </div>
    </section>
  );
};

export default Hero;