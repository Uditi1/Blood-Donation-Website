// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Nav = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [arrowDown, setArrowDown] = useState(true);

// //   const closeModal = () => {
// //     setShowModal(false);
// //   };

// //   const openModal = () => {
// //     setShowModal(true);
// //   };

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //     setArrowDown(!arrowDown);
// //   };
// //   return (
// //     <>
// //     <div className="flex items-center justify-between p-4 text-gray-900 font-extrabold font-serif ">
// //     <h1>BLOODCELLS</h1>
// //     {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
// //     <ul className="flex justify-center mx-auto px-5">
// //       <li className="mx-4">
// //         <Link to="/" className="no-underline" activeClassName="active">
// //           HOME
// //         </Link>
// //       </li>
// //       <li className="mx-4">
// //         <Link to="/about" className="no-underline">
// //           ABOUT
// //           </Link>
// //       </li>
// //       <li className="mx-4 flex flex-1">
// //         <Link to="/Lookingforblood" className="no-underline flex items-center" 
// //         onClick={toggleDropdown} >
// //          LOOKING FOR BLOOD
// //         <svg
// //             className={`h-4 w-4 ml-2 ${isOpen ? "rotate-180" : ""}`}
// //             viewBox="0 0 20 20"
// //             fill="currentColor"
// //         >
// //           <path d="M6 8l4 4 4-4"></path>
// //         </svg>
// //           </Link>
// //           <ul className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
// //         <li>
// //           <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/">
// //            BLOOD AVAILIBILITY
// //           </Link>
// //         </li>
// //         <li>
// //           <Link className="w-full text-left px-4 py-2 block text-gray-800 hover:bg-gray-200" to="/">
// //             NEARBY BLOOD BANKS
// //           </Link>
// //         </li>
// //         <li>
// //           <Link className="w-full text-left px-4 py-2 block text-gray-800 hover:bg-gray-200" to="/">
// //            BLOOD BANK DIRECTORY
// //           </Link>
// //         </li>
// //       </ul>
// //       </li>
// //       <li className="mx-4">
// //         <Link to="/donation" className="no-underline">
// //           DONATE BLOOD
// //           </Link>
// //       </li>
// //       {/* <li className="mx-4">
// //         <Link to="/donation" className="no-underline">
// //          CONTACT US
// //           </Link>
// //       </li> */}
// //     </ul>
// //       {/* <button className="btn btn-success ml-auto">Login</button> */}
// //       <button
// //         onClick={openModal}
// //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
// //       >
// //         Log In / Sign Up
// //       </button>

// //       {showModal ? (
// //         <div className="fixed z-20 inset-0 overflow-y-auto">
// //           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// //             <div
// //               onClick={closeModal}
// //               className="fixed inset-0 transition-opacity"
// //               aria-hidden="true"
// //             >
// //               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// //             </div>
// //             <span
// //               onClick={closeModal}
// //               className="hidden sm:inline-block sm:align-middle sm:h-screen"
// //               aria-hidden="true"
// //             >
// //               ​
// //             </span>
// //             <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
// //               <div>
// //                 <div className="mt-3 sm:mt-5 mb-5">
// //                   <h3 className="text-lg leading-6 font-medium text-gray-900">
// //                     Log In or Sign Up
// //                   </h3>
// //                   <div className="mt-2">
// //                     {/* Login form */}
// //                     <form className="login-form">
// //                       <input
// //                         type="text"
// //                         placeholder="Email"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <input
// //                         type="password"
// //                         placeholder="Password"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
// //                         Log In
// //                       </button>
// //                     </form>

// //                     {/* Signup form */}
// //                     <form className="my-3">
// //                       <input
// //                         type="text"
// //                         placeholder="Full Name"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <input
// //                         type="email"
// //                         placeholder="Email"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <input
// //                         type="password"
// //                         placeholder="Password"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <input
// //                         type="password"
// //                         placeholder="Confirm Password"
// //                         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm mb-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                       />

// //                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
// //                         Sign Up
// //                       </button>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="mt-5 sm:mt-6">
// //                 <button
// //                   onClick={closeModal}
// //                   type="button"
// //                   className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ) : null}
// //     </div>
// //     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="/0099ff" fill-opacity="1" d="M0,160L21.8,133.3C43.6,107,87,53,131,58.7C174.5,64,218,128,262,170.7C305.5,213,349,235,393,213.3C436.4,192,480,128,524,138.7C567.3,149,611,235,655,256C698.2,277,742,235,785,213.3C829.1,192,873,192,916,176C960,160,1004,128,1047,106.7C1090.9,85,1135,75,1178,96C1221.8,117,1265,171,1309,181.3C1352.7,192,1396,160,1418,144L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg> */}
// //     </>
// //   );
// // };

// // export default Nav;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);


//   const toggleDropdown1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const toggleDropdown2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   return (
//     <>
//       <div className="flex items-center justify-between p-4 text-gray-900 font-extrabold font-serif ">
//       {/* <img src="https://ucarecdn.com/d9737936-839f-4651-95c3-7b0894908d47/-/scale_crop/1200x630/smart/" alt="Logo" className=" w-1/4" /> */}
//       <h1>BLOODCELLS</h1>
//         <ul className="flex justify-center mx-auto px-5">
//           <li className="mx-4">
//             <Link to="/" className="no-underline" activeClassName="active">
//               HOME
//             </Link>
//           </li>
//           <li className="mx-4">
//             <Link to="/about" className="no-underline">
//               ABOUT
//             </Link>
//           </li>
//           <li className="mx-4">
//             <button
//               className="no-underline flex items-center"
//               onClick={toggleDropdown1}
//             >
//               LOOKING FOR BLOOD
//               <svg
//                 className={`h-4 w-4 ml-2 ${isOpen1 ? "rotate-180" : ""}`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isOpen1 && (
//               <ul className="absolute mt-2 py-2 w-69 bg-white rounded-md shadow-lg z-10">
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     BLOOD AVAILIBILITY
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     NEARBY BLOOD BANKS
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     BLOOD BANK DIRECTORY
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="mx-4">
//           <button
//               className="no-underline flex items-center"
//               onClick={toggleDropdown2}
//             >
//      DONATE BLOOD
//               <svg
//                 className={`h-4 w-4 ml-2 ${isOpen2 ? "rotate-180" : ""}`}
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isOpen2 && (
//               <ul className="absolute mt-2 py-2 w-69 bg-white rounded-md shadow-lg z-10">
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                    DONOR LOGIN
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                    ABOUT BLOOD DONATION
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     MYTHS ABOUT DONATION
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     REGISTER VBD CAMPS
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//       </ul>
   
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//           Log In / Sign Up
//         </button>
//       </div>
//     </>
//   );
// };

// export default Nav;

import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" py-2">
        <div className="container flex justify-between  items-center px-4">
        <h3 className="text-xl font-monoton text-gray-900">SANJEEVNI</h3>

          <ul className="flex items-center">
            <li className="mx-4">
              <Link to="/" className="text-gray-800 hover:text-red-500 font-bold">
                HOME
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/about" className="text-gray-800 hover:text-red-500 font-bold">
                ABOUT US
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/LookingBlood" className="text-gray-800 hover:text-red-500 font-bold">
                LOOKING FOR BLOOD
              </Link>
            </li>
            <li className="mx-4">
            <Link to="/Donor" className="text-gray-800 hover:text-red-500 font-bold">
                DONATE BLOOD
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/login" className="text-gray-800 hover:text-red-500 font-bold hover:border-">
                SANJEEVNI LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

