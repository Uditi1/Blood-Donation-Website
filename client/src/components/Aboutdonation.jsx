import React  from "react";
// import Donorgif from './Donorgif.gif';
const bloodTypes = [
  {
    type: "A+",
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["A+", "A-", "O+", "O-"],
  },
  {
    type: "A-",
    canDonateTo: ["A+", "A-", "AB+", "AB-"],
    canReceiveFrom: ["A-", "O-"],
  },
  {
    type: "B+",
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["B+", "B-", "O+", "O-"],
  },
  {
    type: "B-",
    canDonateTo: ["B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["B-", "O-"],
  },
  {
    type: "AB+",
    canDonateTo: ["AB+"],
    canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  {
    type: "AB-",
    canDonateTo: ["AB+", "AB-"],
    canReceiveFrom: ["A-", "B-", "AB-", "O-"],
  },
  {
    type: "O+",
    canDonateTo: ["A+", "B+", "AB+", "O+"],
    canReceiveFrom: ["O+", "O-"],
  },
  {
    type: "O-",
    canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    canReceiveFrom: ["O-"],
  },
];



const Aboutdonation = () => {
  return (
    <div className="bg">
      <h1 className="text-3xl font-bold font-mono text-center my-8 text-red-600  ">
        Learn About Donation
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <img
            src={"https://cdni.iconscout.com/illustration/premium/thumb/people-donate-blood-to-charity-7820863-6207469.png"}
            alt="Blood Donor"
            className="w-full h-full object-cover "
          />
          {/* <img
            src={Donorgif}
            alt="Blood Donor"
            className="w-full h-full object-cover transition duration-50 ease-in-out transform hover:scale-110"
          /> */}
        </div>
        <div className="w-1/2">
          <table className="table-auto text-sm mb-2 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border border-gray-300 text-center text-white bg-red-600 hover:bg-red-700">
                  Blood Type
                </th>
                <th className="p-2 border border-gray-300 text-center text-black bg-red-600 hover:bg-red-700">
                  Can Donate To
                </th>
                <th className="p-2 border border-gray-300 text-center text-black bg-red-600 hover:bg-red-700">
                  Can Receive From
                </th>
              </tr>
            </thead>
            <tbody>
              {bloodTypes.map((donor) => (
                <tr key={donor.bloodType}>
                  <td className="p-2 border border-gray-900 text-gray-900 text-center font-bold font-serif">
                    {donor.type}
                  </td>
                  <td className="p-2 border border-gray-950 text-gray-900 text-center font-bold font-serif">
                    {donor.canDonateTo.join(", ")}
                  </td>
                  <td className="p-2 border border-gray-900 text-gray-900 text-center font-bold font-serif">
                    {donor.canReceiveFrom.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aboutdonation;

// import React from 'react'
// // import wholeblood from "./Images/wholeblood.jpg"
// import blooddonation from "./Images/blooddonation.jpg"
// import blood1 from "./Images/blood1.jpg"
// import plasma from "./Images/plasma.jpg"


// const Aboutdonation = () => {
//   const handleClick1 = (e) => {
//     window.location.href = `https://youtu.be/BwjwbxbwN34`;
//   }
//   const handleClick2 = (e) => {
//     window.location.href = `https://youtu.be/Tfwq_vJHwT8`;
//   }
//   const handleClick3 = (e) => {
//     window.location.href = `https://youtu.be/BH50-AEBK1Q`;
//   }
//   const handleClick4 = (e) => {
//     window.location.href = `https://youtu.be/08Pb-UZPLiU`;
//   }
//   return (
//     <div>
//       <div className="flex flex-nowrap ml-2 mr-2 sm:grid-cols-2 gap-4">
//   {/* <!-- Whole Blood Donation card --> */}
//   <div className="bg-gray-100 rounded-lg shadow-lg">
//     <div className="bg-red-600 text-white rounded-t-lg px-4 py-3">
//       <h2 className=" text-center text-2xl font-bold font-mono" >Whole Blood Donation</h2>
//     </div>
//     <div className="p-4 ">
//       <img src={plasma} alt="" className='rounded-lg'/>
//       <p className="mt-2 text-center font-bold">A<span className='text-red-500 hover:text-red-600 focus:text-red-600'> whole blood donation </span> is the most common type of donation, and can help save up to three lives.</p>
//       <p className="mt-2  text-center font-bold"><span className='text-red-400'>Eligibility:</span> Ages 16 and older, in good health, with and meet other donation  requirements of Users.</p>
//       <button className="block mx-auto m-4 px-4 py-2 bg-red-600 text-white  rounded-md hover:bg-red-600"onClick={handleClick2} >Learn More</button>
    
//     </div>
//   </div>

//   {/* <!-- Double Red Cell Donation card --> */}
//   <div className="bg-gray-100 rounded-lg shadow-lg">
//     <div className="bg-red-600 text-white rounded-t-lg px-4 py-3">
//       <h2 className="text-center text-2xl font-bold font-mono">Double Red Cell Donation</h2>
//     </div>
//     <div className="p-4">
//     <img src={blooddonation} alt="" className='rounded-lg mx-auto resize'/>
//       <p className="mt-2 text-center font-bold"><span className='text-red-500 hover:text-red-600 focus:text-red-600'>Double red cell donation</span> collects
//        two units of red cells while returning most of the plasma and platelets to the donor.</p>
//       <p className="mt-2 text-center font-bold"><span className='text-red-400'>Eligibility:</span> Ages 17 and older, weigh at least 130 pounds, in good health, and meet other donation requirements.</p>
//       <button className="block mx-auto m-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={handleClick3}>Learn More</button>
//     </div>
//   </div>

//   {/* <!-- Platelet Donation card --> */}
//   <div className="bg-gray-100 rounded-lg shadow-lg">
//     <div className="bg-red-600 text-white rounded-t-lg px-4 py-3">
//       <h2 className="text-center text-2xl font-bold font-mono">Platelet Donation</h2>
//     </div>
//     <div className="p-4">
//       <img src={blood1} alt="" className='rounded-lg ml-[-2]'/>
//       <p className="mt-2 text-center font-bold"><span className='text-red-500 hover:text-red-600 focus:text-red-600'>Platelets</span> are critical for cancer patients, organ transplants, and other lifesaving medical treatments.</p>
//       <p className="mt-2 text-center font-bold"><span className='text-red-400'>Eligibility:</span> Ages 17 and older, in good health, and meet other donation requirements.</p>
//       <button className="block mx-auto m-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"onClick={handleClick1}>Learn More</button>
//     </div>
//   </div>

//   {/* <!-- Plasma Donation card --> */}
//   <div className="bg-gray-100 rounded-lg shadow-lg">
//     <div className="text-center bg-red-600 text-white rounded-t-lg px-4 py-3">
//       <h2 className="text-2xl font-bold font-mono">Plasma Donation</h2>
//     </div>
//     <div className="p-4 ">
//       <img src={plasma} alt="" className='rounded-lg'/>
//       <p className="mt-2 text-center font-bold"><span className='text-red-500 hover:text-red-600 focus:text-red-600'>Plasma</span> is used to treat burn victims, patients with severe infections, and other medical conditions.</p>
//       <p className="mt-2 text-center font-bold"><span className='text-red-400'>Eligibility:</span> Ages 18 and older, in good health, and meet other donation requirements.</p>
//       <button className="block mx-auto m-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={handleClick4}>Learn More</button>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Aboutdonation
