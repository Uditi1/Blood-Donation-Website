import React from "react";
import plasma from "./Images/plasma.jpg";

const AboutSection = () => {
  return (
// ....................main content  starts here ..............................
  
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 lg:flex items-center justify-center">
        <img
          src={plasma}
          alt="About Image"
          className="w-1/2 rounded-lg  lg:w-1/3 mx-auto mb-8 lg:mb-0 lg:mr-8"
        />
        <div className="lg:w-2/3">
          <h2 className="text-center text-3xl mb-4 font-bold font-mono text-red-600">
            About Us
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
           <b>SANJEEVNI</b> is a blood donation and blood bank finder website that helps connect donors with those in need. Our mission is to ensure that everyone who needs blood can receive it in a timely manner, and we achieve that by working with blood banks, hospitals, and local communities to raise awareness about the importance of regular blood donation. We believe that every donation counts and has the potential to save a life, which is why we're committed to making the donation process as easy and convenient as possible for everyone.
          </p>
        </div>
      </div>
    </section>

    //................... main  content ends here ...........

    
  );
};

export default AboutSection;