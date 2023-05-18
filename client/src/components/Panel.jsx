import React  from "react";
import { Link } from "react-router-dom";

 function Panel() {
  const handleClick4 = (e) => {
    window.location.href = `https://youtu.be/qm9DZFrLWQU`;
  }
  return (


  //  ..........................main content start here ........................................
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
  //  .....................main content ends here..............................................

    
  );
}
export default Panel;