import  React ,{ useState } from "react";
import Login from "./Images/Login.png"
import { Link } from "react-router-dom";

const WSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-7 rounded-lg max-w-sm w-full">
        <div className="logo flex justify-center mb-8">
          <img src={Login} alt="Blood Bank Logo" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name" className="block mb-2 ">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded-md py-3 px-4 mb-4 w-full outline-none caret-red-700"
            placeholder="Enter full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md py-3 px-4 mb-6 w-full  outline-none caret-red-700 "
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

        
          <Link to="/Signup" className="bg-red-600 py-3 px-6 rounded-md text-center text-white hover:bg-red-700 block mx-auto w-full" 
          button type ="Submit">
            Sign Up
            </Link> 
        </form>
      </div>
    </div>
  );
};

export default WSignup;

// import React, { useState } from "react";
// import Login from "./Images/Login.png";
// import { Link } from "react-router-dom";

// const WSignup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(name, email, password);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-7 rounded-lg max-w-sm w-full relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           x
//         </button>
//         <div className="logo flex justify-center mb-8">
//           <img src={Login} alt="Blood Bank Logo" />
//         </div>
//         <form onSubmit={handleFormSubmit}>
//           <label htmlFor="name" className="block mb-2 ">
//             Full Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="border rounded-md py-3 px-4 mb-4 w-full outline-none caret-red-700"
//             placeholder="Enter full name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             required
//           />

//           <label htmlFor="email" className="block mb-2">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
//             placeholder="Enter email address"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />

//           <label htmlFor="password" className="block mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="border rounded-md py-3 px-4 mb-6 w-full  outline-none caret-red-700 "
//             placeholder="Enter password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//           <Link
//             to="/Signup"
//             className="bg-red-600 py-3 px-6 rounded-md text-center text-white hover:bg-red-700 block mx-auto w-full"
//             button
//             type="Submit"
//           >
//             Sign Up
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WSignup;

// import React, { useState } from "react";
// import Login from "./Images/Login.png";
// import { Link } from "react-router-dom";

// const WSignup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(name, email, password);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-7 rounded-lg max-w-sm w-full relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           x
//         </button>
//         <div className="logo flex justify-center mb-8">
//           <img src={Login} alt="Blood Bank Logo" />
//         </div>
//         <form onSubmit={handleFormSubmit}>
//           <label htmlFor="name" className="block mb-2 ">
//             Full Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="border rounded-md py-3 px-4 mb-4 w-full outline-none caret-red-700"
//             placeholder="Enter full name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             required
//           />

//           <label htmlFor="email" className="block mb-2">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
//             placeholder="Enter email address"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />

//           <label htmlFor="password" className="block mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="border rounded-md py-3 px-4 mb-6 w-full  outline-none caret-red-700 "
//             placeholder="Enter password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//           <Link
//             to="/Signup"
//             className="bg-red-600 py-3 px-6 rounded-md text-center text-white hover:bg-red-700 block mx-auto w-full"
//             button
//             type="Submit"
//           >
//             Sign Up
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WSignup;