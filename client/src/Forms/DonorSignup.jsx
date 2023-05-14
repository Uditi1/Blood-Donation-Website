import React, { useState } from "react";
import Modal from "./Modal";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} title="Login Modal">
        <form>
          <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-outline-blue"
          />

          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-outline-blue"
          />

          <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-outline-blue"
          />

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;