import  React ,{ useState } from "react";
import Login from "./Images/Login.png"
import { Link } from "react-router-dom";


const WLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log( email, password);
  };
  return (
    // ....................................main content strt here ................................
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-8 rounded-lg max-w-sm w-full">
        <div className="logo flex justify-center mb-8">
          <img src={Login} alt="Blood Bank Logo" />
        </div>
        {/* Form content start here */}
        <form onSubmit={handleFormSubmit}>
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

          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 block mx-auto w-full "
          >
            Sign In
          </button>
          <div className=" text-black text-center font-bold">
      Don't have an account?{' '}
      <Link to="/WSignup" className="text-red-500 hover:text-red-700 font-bold font-mono">
        Create one
      </Link>
      .
    </div>
        </form>
        {/* form content ends here */}
      </div>
    </div>
    // ..................main content ends here...........................................................
  );
};

export default WLogin;

