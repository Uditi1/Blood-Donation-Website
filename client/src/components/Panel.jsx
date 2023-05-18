// // import React from "react";

// // const DonationTypes = () => {
// //   return (
// //     <section className="py-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className=" text-center text-3xl font-bold mb-4 text-white">
// //           Types of Blood Donation
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             <h3 className="text-2xl font-bold mb-4">Whole Blood Donation</h3>
// //             <p className="text-gray-700">
// //               Whole blood donation is the most common type of donation, in which
// //               a person donates one pint of blood.
// //             </p>
// //           </div>
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             <h3 className="text-2xl font-bold mb-4">Platelet Donation</h3>
// //             <p className="text-gray-700">
// //               Platelet donation involves the separation of platelets from the
// //               rest of the blood components, and the remaining blood is returned
// //               to the donor.
// //             </p>
// //           </div>
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             <h3 className="text-2xl font-bold mb-4">Plasma Donation</h3>
// //             <p className="text-gray-700">
// //               Plasma donation involves the separation of plasma from the rest of
// //               the blood components, and the remaining blood is returned to the
// //               donor.
// //             </p>
// //           </div>
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             <h3 className="text-2xl font-bold mb-4">
// //               Double Red Cell Donation
// //             </h3>
// //             <p className="text-gray-700">
// //               Double red cell donation involves the donation of two units of red
// //               blood cells while returning the plasma and platelets back to the
// //               donor.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DonationTypes;

// import React from "react";

// function DonationTypes() {
//   return (
//     <section className="bg-white py-10 my-3">
//       <div className="container mx-auto">
//         <h2 className="text-center text-2xl font-bold mb-8">Types of Blood Donations</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div className="p-4 bg-gray-100 shadow rounded-lg">
//             <h3 className=" text-center text-lg font-semibold mb-2">Whole Blood</h3>
//             <p className="text-center">
//               The most common and traditional type of donation where a pint of
//               whole blood is collected.
//             </p>
//           </div>
//           <div className="p-4 bg-gray-100 shadow rounded-lg Whole Blood">
//             <h3 className="text-center text-lg font-semibold mb-2">Platelets</h3>
//             <p className="text-center">
//               Platelets are tiny cells in your blood that form clots and stop
//               bleeding.
//             </p>
//           </div>
//           <div className="p-4 bg-gray-100 shadow rounded-lg">
//             <h3 className="text-center Whole Blood text-lg font-semibold mb-2">Plasma</h3>
//             <p className="text-center">
//               Plasma is the liquid portion of your blood that contains important
//               proteins and antibodies.
//             </p>
//           </div>
//           <div className="p-4 bg-gray-100 shadow rounded-lg">
//             <h3 className="text-center text-lg font-semibold mb-2">Power Red</h3>
//             <p className="text-center">
//               Power Red donation involves the collection of only red blood cells
//               while returning other blood components back to the donor.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DonationTypes;

import React  from "react";
import { Link } from "react-router-dom";

 function Panel() {
  const handleClick4 = (e) => {
    window.location.href = `https://youtu.be/qm9DZFrLWQU`;
  }
  return (
    <div className="bg-transparent flex flex-col items-center mt-8 ">
      <h2 className="text-center text-3xl font-bold font-mono text-red-500 ">PANEL YOU CAN EXPLORE</h2>
      <div className="flex flex-wrap justify-center item-center mt-8">
        <div className="bg-white rounded-lg shadow-md mx-4 my-2 p-6 w-80 ">
          <i className="justify-center flex fa-solid fa-user text-red-600 text-6xl "></i>
          <h3 className="text-center text-xl font-bold mt-4 font-mono">DONOR LOGIN</h3>
          <Link
            to="/dLogin"
            className="block mx-auto text-center bg-blue-500 text-white rounded-lg font-semibold mt-4 py-2 px-6  hover:bg-red-500  focus:bg-red-600"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md mx-4 my-2 p-6 w-80">
          <i className="justify-center flex fas fa-exclamation-triangle text-red-600 text-6xl align-center"></i>
          <h3 className="text-center text-xl font-bold mt-4 font-mono">BLOOD DONATION MYTHS</h3>
          <Link
            to="#"
            className="block mx-auto text-center bg-blue-500 text-white rounded-lg font-semibold mt-4 py-2 px-6  hover:bg-red-500 focus:bg-red-600" onClick={handleClick4}
          >
            Learn More
          </Link>
        </div>

        <div className=" bg-white rounded-lg shadow-md mx-4 my-2 p-6 w-80">
          <i className="justify-center flex fa-solid fa-check-circle text-red-600 text-6xl"></i>
          <h3 className=" text-center text-xl font-bold mt-4 font-mono">FIND NEARBY BLOODBANK</h3>
          <a
            href="https://bloodbank-search-list.hemantsrivasta1.repl.co/"
            className="block mx-auto text-center bg-blue-500 text-white rounded-lg font-semibold mt-4 py-2 px-6  hover:bg-red-500 focus:bg-red-600"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
export default Panel;