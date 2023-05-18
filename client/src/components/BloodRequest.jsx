// import React, { useState } from "react";
// import Main from './Images/Main.jpg'; // Importing blood donation image

// const BloodRequest = () => {
//   const [bloodType, setBloodType] = useState("");
//   const [location, setLocation] = useState("");
//   const [contactInfo, setContactInfo] = useState("");
//   const [requests, setRequests] = useState([]);
//   const [selectedBloodType, setSelectedBloodType] = useState(null);

//   const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRequest = { bloodType, location, contactInfo };
//     setRequests([...requests, newRequest]);
//     setBloodType("");
//     setLocation("");
//     setContactInfo("");
//   };

//   const handleBloodTypeChange = (e) => {
//     setBloodType(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleContactInfoChange = (e) => {
//     setContactInfo(e.target.value);
//   };

//   return (
//     <div class="container mx-auto px-4 flex flex-col md:flex-row"> {/* Using flexbox for layout */}
//     <div class="w-full md:w-1/2 p-4"> {/* Assigning div 50% width in medium and large viewports */}
//       <img src={Main} alt="Blood donation" className="w-full h-88 mix-blend-darken max-w-full lg:max-w-none overflow-hidden mt-[-20px] mr-3" /> 
//     </div>
//     <div class="flex-grow p-4 my-2"> {/* Using flex-grow class to place content to the right of the image */}
//       <h2 class="text-2xl font-bold mb-4 text-red-500">Request Blood</h2> {/* Using text and font utility classes for typography */}
//       <form onSubmit={handleSubmit} class="max-w-lg mx-auto  p-4 my-4 rounded-lg bg-opaque-50">
//           <div className="mb-4">
//             <label htmlFor="blood-type" className="block font-bold">Blood Type:</label>
//             <select
//               id="blood-type"
//               value={selectedBloodType}
//               onChange={handleBloodTypeChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none" // Using focus utility class for accessibility
//             >
//               {bloodTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="location"
//               className="block font-bold mb-2"
//             >
//               Location
//             </label>
//             <input
//               type="text"
//               id="location"
//               placeholder="e.g. Ghaziabad"
//               value={location}
//               onChange={handleLocationChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="contact-info"
//               className="block font-bold mb-2"
//             >
//               Contact Info
//             </label>
//             <input
//               type="text"
//               id="contact-info"
//               placeholder="Phone number, email, etc."
//               value={contactInfo}
//               onChange={handleContactInfoChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="block bg-red-500 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-red-700 focus:outline-none" // Using hover utility class for hover state
//           >
//             Submit Request
//           </button>
//         </form>
//         {/* <div className="max-w-lg mx-auto"> */}
//         <div class="max-w-lg mx-auto">
//           <h2 className="text-lg font-bold mb-4 text-red-500">Blood Requests</h2> {/* Using text and font utility classes for typography */}
//           <ul className="list-disc pl-4">
//             {requests.length > 0 ? (
//               requests.map((request, index) => (
//                 <li key={index} className="mb-2 no-undernpm line">
//                   <span className="font-bold">{request.bloodType}: </span>
//                   <span>{request.location}</span>
//                   <span className="text-sm font-semibold ml-2">
//                     ({request.contactInfo})
//                   </span>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-700">No requests found.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodRequest;


// import React, { useState } from 'react';
// import Leftimg from './Images/Leftimg.jpg';
// import BloodRequestResults from './BloodRequestResults';

// const BloodRequest = () => {
//   const [bloodType, setBloodType] = useState('');
//   const [location, setLocation] = useState('');
//   const [contactInfo, setContactInfo] = useState('');
//   const [requests, setRequests] = useState([]);
//   const [selectedBloodType, setSelectedBloodType] = useState(null);

//   const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRequest = { bloodType, location, contactInfo };
//     setRequests([...requests, newRequest]);
//     setBloodType('');
//     setLocation('');
//     setContactInfo('');
//   };

//   const handleBloodTypeChange = (e) => {
//     setBloodType(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleContactInfoChange = (e) => {
//     setContactInfo(e.target.value);
//   };

//   return (
//     <div className='container mx-auto px-4 flex flex-col md:flex-row'>
//       <div className='w-full md:w-1/2'>
//         <img
//           src={Leftimg}
//           alt='Blood donation'
//           className='mix-blend-darken max-w-full lg:max-w-none overflow-hidden mt-[-20px] mr-3'
//         />
//       </div>

//       <div className='flex-grow p-4 my-2'>
//         <h2 className='text-2xl font-bold mb-4 text-red-500'>Request Blood</h2>

//         <form
//           onSubmit={handleSubmit}
//           className='max-w-lg mx-auto bg-white p-4 my-4 rounded-lg shadow-md'
//         >
//           <div className='mb-4'>
//             <label htmlFor='blood-type' className='block font-bold'>
//               Blood Type:
//             </label>

//             <select
//               id='blood-type'
//               value={selectedBloodType}
//               onChange={handleBloodTypeChange}
//               className='border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none'
//             >
//               {bloodTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className='mb-4'>
//             <label htmlFor='location' className='block font-bold mb-2'>
//               Location
//             </label>

//             <input
//               type='text'
//               id='location'
//               placeholder='e.g. Ghaziabad'
//               value={location}
//               onChange={handleLocationChange}
//               className='border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none'
//             />
//           </div>

//           <div className='mb-4'>
//             <label htmlFor='contact-info' className='block font-bold mb-2'>
//               Contact Info
//             </label>

//             <input
//               type='text'
//               id='contact-info'
//               placeholder='Phone number, email, etc.'
//               value={contactInfo}
//               onChange={handleContactInfoChange}
//               className='border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none'
//             />
//           </div>

//           <button
//             type='submit'
//             className='bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-700 focus:outline-none'
//           >
//             Submit Request
//           </button>
//         </form>

//         <BloodRequestResults data={requests} />
//       </div>
//     </div>
//   );
// };

// export default BloodRequest;

// import React, { useState } from "react";
// import Main from './Images/Main.jpg'; // Importing blood donation image

// const BloodRequest = () => {
//   const [bloodType, setBloodType] = useState("");
//   const [location, setLocation] = useState("");
//   const [contactInfo, setContactInfo] = useState("");
//   const [requests, setRequests] = useState([]);
//   const [selectedBloodType, setSelectedBloodType] = useState(null);

//   const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newRequest = { bloodType, location, contactInfo };
//     setRequests([...requests, newRequest]);
//     setBloodType("");
//     setLocation("");
//     setContactInfo("");
//   };

//   const handleBloodTypeChange = (e) => {
//     setBloodType(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleContactInfoChange = (e) => {
//     setContactInfo(e.target.value);
//   };

//   return (
//     <div class="container mx-auto px-4 flex flex-col md:flex-row"> {/* Using flexbox for layout */}
//     <div class="w-full md:w-1/2 p-4"> {/* Assigning div 50% width in medium and large viewports */}
//       <img src={Main} alt="Blood donation" className="w-full h-88 mix-blend-darken max-w-full lg:max-w-none overflow-hidden mt-[-20px] mr-3" /> 
//     </div>
//     <div class="flex-grow p-4 my-2"> {/* Using flex-grow class to place content to the right of the image */}
//       <h2 class="text-2xl font-bold mb-4 text-red-500">Request Blood</h2> {/* Using text and font utility classes for typography */}
//       <form onSubmit={handleSubmit} class="max-w-lg mx-auto  p-4 my-4 rounded-lg bg-opaque-50">
//           <div className="mb-4">
//             <label htmlFor="blood-type" className="block font-bold">Blood Type:</label>
//             <select
//               id="blood-type"
//               value={selectedBloodType}
//               onChange={handleBloodTypeChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none" // Using focus utility class for accessibility
//             >
//               {bloodTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="location"
//               className="block font-bold mb-2"
//             >
//               Location
//             </label>
//             <input
//               type="text"
//               id="location"
//               placeholder="e.g. Ghaziabad"
//               value={location}
//               onChange={handleLocationChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="contact-info"
//               className="block font-bold mb-2"
//             >
//               Contact Info
//             </label>
//             <input
//               type="text"
//               id="contact-info"
//               placeholder="Phone number, email, etc."
//               value={contactInfo}
//               onChange={handleContactInfoChange}
//               className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="block bg-red-500 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-red-700 focus:outline-none" // Using hover utility class for hover state
//           >
//             Submit Request
//           </button>
//         </form>
//         {/* <div className="max-w-lg mx-auto"> */}
//         <div class="max-w-lg mx-auto">
//           <h2 className="text-lg font-bold mb-4 text-red-500">Blood Requests</h2> {/* Using text and font utility classes for typography */}
//           <ul className="list-disc pl-4">
//             {requests.length > 0 ? (
//               requests.map((request, index) => (
//                 <li key={index} className="mb-2 no-undernpm line">
//                   <span className="font-bold">{request.bloodType}: </span>
//                   <span>{request.location}</span>
//                   <span className="text-sm font-semibold ml-2">
//                     ({request.contactInfo})
//                   </span>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-700">No requests found.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodRequest;


import React, { useState } from "react";
import Main from './Images/Main.jpg'; // Importing blood donation image
import { FaEdit, FaTrash } from 'react-icons/fa';

const BloodRequest = () => {
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [requests, setRequests] = useState([]);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { bloodType, location, contactInfo };
    setRequests([...requests, newRequest]);
    setBloodType("");
    setLocation("");
    setContactInfo("");
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleRemove = (index) => {
    const newRequests = [...requests];
    newRequests.splice(index, 1);
    setRequests(newRequests);
  };

  const handleEdit = (index) => {
    const requestToUpdate = requests[index];
    setBloodType(requestToUpdate.bloodType);
    setLocation(requestToUpdate.location);
    setContactInfo(requestToUpdate.contactInfo);
    handleRemove(index);
  };

  return (
    <div class="container mx-auto px-4 flex flex-col md:flex-row"> {/* Using flexbox for layout */}
    <div class="w-full md:w-1/2 p-4"> {/* Assigning div 50% width in medium and large viewports */}
      <img src={Main} alt="Blood donation" className="w-full h-88 mix-blend-darken max-w-full lg:max-w-none overflow-hidden mt-[-20px] mr-3" /> 
    </div>
    <div class="flex-grow p-4 my-2"> {/* Using flex-grow class to place content to the right of the image */}
      <h2 class="text-2xl font-bold mb-4 text-red-500">Request Blood</h2> {/* Using text and font utility classes for typography */}
      <form onSubmit={handleSubmit} class="max-w-lg mx-auto  p-4 my-4 rounded-lg bg-opaque-50">
          <div className="mb-4">
            <label htmlFor="blood-type" className="block font-bold">Blood Type:</label>
            <select
              id="blood-type"
              value={bloodType}
              onChange={handleBloodTypeChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none" // Using focus utility class for accessibility
            >
              {bloodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="e.g. Ghaziabad"
              value={location}
              onChange={handleLocationChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact-info"
              className="block font-bold mb-2"
            >
              Contact Info
            </label>
            <input
              type="text"
              id="contact-info"
              placeholder="Phone number, email, etc."
              value={contactInfo}
              onChange={handleContactInfoChange}
              className="border border-gray-400 rounded-md px-2 py-1 w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="block bg-red-500 text-white px-4 py-2 mt-4 rounded-md font-bold hover:bg-red-700 focus:outline-none" // Using hover utility class for hover state
          >
            Submit Request
          </button>
        </form>
        <div class="max-w-lg mx-auto">
          <h2 className="text-lg font-bold mb-4 text-red-500">Blood Requests</h2> {/* Using text and font utility classes for typography */}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Blood Type</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Contact Info</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{request.bloodType}</td>
                  <td className="border px-4 py-2">{request.location}</td>
                  <td className="border px-4 py-2">{request.contactInfo}</td>
                  <td className="border px-4 py-2">
                    <button className="mr-3 text-red-500" onClick={() => handleEdit(index)}>
                      <FaEdit />
                    </button>
                    <button  className="mr-3 text-red-500" onClick={() => handleRemove(index)}>
                      <FaTrash />
                    </button>
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

export default BloodRequest;