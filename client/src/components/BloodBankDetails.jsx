// import React, { useState, useEffect } from "react";
// import data from "../BloodbankData.json";
// // import "./styles.css";

// const BloodBankDetails=()=> {
//   const [bloodBanks, setBloodBanks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     setBloodBanks(data);
//   }, []);

//   const handleSearchTerm = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     const results = bloodBanks.filter((bloodBank) =>
//       bloodBank.state.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   const displayBloodBanks =
//     searchResults.length > 0 ? searchResults : bloodBanks;

//   return (
//     <div className="blood-bank-details">
//       <h1>Blood Bank Details</h1>
//       <form onSubmit={handleSearchSubmit}>
//         <label>
//           Filter by state:
//           <input
//             type="text"
//             placeholder="Enter a state name..."
//             value={searchTerm}
//             onChange={handleSearchTerm}
//           />
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Bank ID</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>District</th>
//             <th>State</th>
//           </tr>
//         </thead>
//         <tbody>
//           {displayBloodBanks.map((bloodBank) => (
//             <tr key={bloodBank.id}>
//               <td>{bloodBank.id}</td>
//               <td>{bloodBank.h_name}</td>
//               <td>{bloodBank.address}</td>
//               <td>{bloodBank.district}</td>
//               <td>{bloodBank.state}</td>
//               <td>
//                 <a
//                   href={`https://www.google.com/maps/search/${bloodBank.h_name}/@28.6929592,77.3176628,13z/data=!3m1!4b1?authuser=0`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button> Get Direction</button>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BloodBankDetails;

// import React, { useState, useEffect } from "react";
// import data from "../BloodbankData.json";

// const BloodBankDetails = () => {
//   const [bloodBanks, setBloodBanks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     setBloodBanks(data);
//   }, []);

//   const handleSearchTerm = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     const results = bloodBanks.filter((bloodBank) =>
//       bloodBank.state.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   const displayBloodBanks =
//     searchResults.length > 0 ? searchResults : bloodBanks;

//   return (
//     <div className="bg-gray-100 min-h-screen p-4">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Blood Bank Details</h1>
//         <form onSubmit={handleSearchSubmit}>
//           <label className="block mb-2">
//             <span className="text-gray-700">Filter by state:</span>
//             <input
//               type="text"
//               placeholder="Enter a state name..."
//               className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               value={searchTerm}
//               onChange={handleSearchTerm}
//             />
//           </label>
//           <button
//             type="submit"
//             className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Search
//           </button>
//         </form>
//         <table className="w-full mt-4 bg-white shadow-md rounded">
//           <thead className="bg-blue-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Bank ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Address
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 District
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 State
//               </th>
//               <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Link
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {displayBloodBanks.map((bloodBank) => (
//               <tr key={bloodBank.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {bloodBank.id}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {bloodBank.h_name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {bloodBank.address}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {bloodBank.district}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {bloodBank.state}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
//                   <a
//                     href={`https://www.google.com/maps/search/${bloodBank.h_name}/@28.6929592,77.3176628,13z/data=!3m1!4b1?authuser=0`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Get Directions
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BloodBankDetails;


import React, { useState, useEffect } from "react";
import data from "../BloodbankData.json";

const BloodBankDetails = () => {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false); // added state variable

  useEffect(() => {
    setBloodBanks(data);
  }, []);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const results = bloodBanks.filter((bloodBank) =>
      bloodBank.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSearchClicked(true); // set state variable to true when search button is clicked
  };

  const displayBloodBanks =
    searchResults.length > 0 && searchClicked ? searchResults : bloodBanks; // show search results only if search button is clicked

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blood Bank Details</h1>
        <form onSubmit={handleSearchSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Filter by state:</span>
            <input
              type="text"
              placeholder="Enter a state name..."
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={handleSearchTerm}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
        <table className="w-full mt-4 bg-white shadow-md rounded">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                District
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                State
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayBloodBanks.map((bloodBank) => (
              <tr key={bloodBank.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {bloodBank.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bloodBank.h_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bloodBank.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bloodBank.district}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bloodBank.state}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                  <a
                    href={`https://www.google.com/maps/search/${bloodBank.h_name}/@28.6929592,77.3176628,13z/data=!3m1!4b1?authuser=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Get Directions
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodBankDetails;