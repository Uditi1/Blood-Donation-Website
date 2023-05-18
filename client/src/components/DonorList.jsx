import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import red3 from "./Images/red3.jpg"

const DonorList = () => {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDonor = { name, email, phone, bloodGroup };
    setDonors([...donors, newDonor]);
    setName("");
    setEmail("");
    setPhone("");
    setBloodGroup("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedBloodGroup(e.target.value);
  };

  const handleDelete = (index) => {
    const newDonors = [...donors];
    newDonors.splice(index, 1);
    setDonors(newDonors);
  };

  const handleEdit = (index) => {
    const donorToEdit = donors[index];
    setName(donorToEdit.name);
    setEmail(donorToEdit.email);
    setPhone(donorToEdit.phone);
    setBloodGroup(donorToEdit.bloodGroup);
    handleDelete(index);
  };

  const bloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  return (
    // ....................main content start here.........................................
    <div className="p-4 flex justify-center items-center">
      <img
        src={red3}
        alt="Donor Logo"
        className="mr-4"
      />
      <div>
        {/* form component start here */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="phone"
              className="block mb-2 font-bold text-gray-700"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="blood-group"
              className="block mb-2 font-bold text-gray-700"
            >
              Blood Group:
            </label>
            <div className="relative">
              <select
                id="blood-group"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedBloodGroup}
                onChange={handleSelectChange}
              >
                {bloodGroups.map((bloodGroup, index) => (
                  <option key={index} value={bloodGroup}>
                    {bloodGroup}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7 5a3 3 0 114.24-4.24 3 3 0 01-4.24 4.24z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 font-mono text-white font-bold py-2 px-4 rounded mt-4"
          >
            Add Donor
          </button>
        </form>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{donor.name}</td>
                <td className="border px-4 py-2">{donor.email}</td>
                <td className="border px-4 py-2">{donor.phone}</td>
                <td className="border px-4 py-2">{donor.bloodGroup}</td>
                <td className="border px-4 py-2 flex items-center">
                  <FaEdit
                    className="mr-2 cursor-pointer"
                    onClick={() => handleEdit(index)}
                  />
                  <FaTrashAlt
                    className="cursor-pointer"
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorList;