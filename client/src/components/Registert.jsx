import React, { useState } from "react";
import Login from "./Images/Login.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Registert() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    status: "",
  });
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputvalue = {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
      // address: formValue.address,
      // status: formValue.status,
    };

    let res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allInputvalue),
    });
    let resjson = await res.json();
    if (res.status === 200) {
      setMessage(resjson.success);
      console.log(resjson);
      localStorage.setItem("authToken", resjson.token);
      setTimeout(() => {
        navigate("/");
        // localStorage.setItem("authToken", res.token);
      }, 2000);
    } else {
      setMessage("Some Error Occured");
    }

    //console.log(allInputvalue);
  };

  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-7 rounded-lg max-w-sm w-full">
        <div className="logo flex justify-center mb-8">
          <img src={Login} alt="Blood Bank Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-lable">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formValue.username}
                  onChange={handleInput}
                  className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-lable">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formValue.email}
                  onChange={handleInput}
                  className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
                />
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleInput}
                className="border rounded-md py-3 px-4 mb-4 w-full outline-none  caret-red-700"
              />
            </div>
            {/* <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Phone No</label>
                                    <input type="text" name="phone" className="form-control" value={formValue.phone} onChange={ handleInput}/>
                                </div>
                            </div> */}
            {/* <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" value={formValue.address} onChange={ handleInput}/>
                                </div>
                            </div> */}
            {/* <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Status</label>
                                    <select className="form-control" name="status" value={formValue.status} onChange={ handleInput}>
                                        <option value="">--Please Select--</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div> */}

            <div className="col-md-12">
              {/* <div className="mb-3">
                    <label className="form-lable"></label>
                    <button type="submit" className="btn btn-success btn-lg">
                      Submit
                    </button>
                  </div> */}
              <button
                className="bg-red-600 py-3 px-6 rounded-md text-center text-white hover:bg-red-700 block mx-auto w-full"
                type="submit"
              >
                Register
              </button>
              <p>Already have a account <Link to="/login" className="font-bold">login</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registert;
