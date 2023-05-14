// import { useState } from "react";

// const BloodBankRegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [showMap, setShowMap] = useState(false);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(name, email, password, address);
//   };

//   const handleAddressInput = (event) => {
//     setAddress(event.target.value.trim());
//   };

//   const handleShowMap = () => {
//     setShowMap(true);
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <form onSubmit={handleFormSubmit}>
//         <div className="mb-6">
//           <label htmlFor="name" className="block text-gray-600">
//             Blood Bank Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="px-3 py-2 mt-1 block w-full border rounded-md"
//             placeholder="Enter blood bank name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block text-gray-600">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="px-3 py-2 mt-1 block w-full border rounded-md"
//             placeholder="Enter email address"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-600">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="px-3 py-2 mt-1 block w-full border rounded-md"
//             placeholder="Enter password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="address" className="block text-gray-600">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             className="px-3 py-2 mt-1 block w-full border rounded-md"
//             placeholder="Enter your address"
//             value={address}
//             onChange={handleAddressInput}
//             required
//           />
//         </div>

//         {!showMap && (
//           <button
//             type="button"
//             onClick={handleShowMap}
//             className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700"
//           >
//             Show Map
//           </button>
//         )}

//         {showMap && (
//           <div>
//             <button
//               type="button"
//               onClick={() => setShowMap(false)}
//               className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700"
//             >
//               Hide Map
//             </button>
//             {/* Map code goes here */}
//           </div>
//         )}

//         <button
//           type="submit"
//           className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 mt-4"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BloodBankRegistrationForm;


import { useState } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap(({ lat, lng, onClick }) => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }} onClick={onClick}>
    {lat && lng && <Marker position={{ lat, lng }} />}
  </GoogleMap>
));

const BloodBankRegistrationForm = ({ apiKey }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, address, latitude, longitude);
  };

  const handleAddressInput = (event) => {
    setAddress(event.target.value.trim());
  };

  const handleMapClick = ({ latLng }) => {
    setLatitude(latLng.lat());
    setLongitude(latLng.lng());
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-600">
            Blood Bank Name
          </label>
          <input
            type="text"
            id="name"
            className="px-3 py-2 mt-1 block w-full border rounded-md"
            placeholder="Enter blood bank name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-3 py-2 mt-1 block w-full border rounded-md"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="px-3 py-2 mt-1 block w-full border rounded-md"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-600">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="px-3 py-2 mt-1 block w-full border rounded-md"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressInput}
            required
          />
        </div>

        {!showMap && (
          <button
            type="button"
            onClick={handleShowMap}
            className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700"
          >
            Show Map
          </button>
        )}

        {showMap && (
          <div className="relative h-96">
            <button
              type="button"
              onClick={() => setShowMap(false)}
              className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 absolute top-0 right-0"
            >
              Hide Map
            </button>
            <Map
              lat={latitude}
              lng={longitude}
              containerElement={<div className="h-full" />}
              mapElement={<div className="h-full" />}
              onClick={handleMapClick}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=+${address}`}
              loadingElement={<div className="h-full" />}
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default BloodBankRegistrationForm;