import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
 
  return (
    <>

    
    {/*************** main content *****************/}
      <div className="py-2 px-3">
        <div className="flex justify-between   ">
        <h3 className="text-xl font-monoton text-gray-900">SANJEEVNI</h3>

          <ul className="flex  items-end ">
            <li className="mx-4">
              <Link to="/" className="text-gray-800 hover:text-red-500 font-bold hover:underline underline-offset-4 decoration-2 decoration-red-600 py-2 rounded-lg">
                HOME
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/about" className="text-gray-800 hover:text-red-500 font-bold hover:underline underline-offset-4 decoration-2 decoration-red-600 py-2 rounded-lg  ">
                ABOUT US
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/LookingBlood" className="text-gray-800 hover:text-red-500 font-bold hover:underline underline-offset-4 decoration-2 decoration-red-600 py-2 rounded-lg ">
                LOOKING FOR BLOOD
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/DonateBlood" className="text-gray-800 hover:text-red-500 font-bold hover:underline underline-offset-4 decoration-2 decoration-red-600 py-2 rounded-lg " >
                DONATE BLOOD
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/login" className="text-gray-800 hover:text-red-500 font-bold hover:underline underline-offset-4 decoration-2 decoration-red-600 py-2 rounded-lg  ">
                SANJEEVNI LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/***************  main content *****************/}


    </>
  );
};

export default Nav;
