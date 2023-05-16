import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { BiDonateBlood } from "react-icons/bi";
import galleryfirstimg from "./Images/galleryfirstimg.jpg"
import gallerysecondimg from "./Images/gallerysecondimg.jpg";

function MythFactCarousel() {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const bloodDonationItems = [
    {
      id: 1,
      title: "Donate Blood",
      imageUrl: galleryfirstimg,
      description:
        "Your blood saves lives! One person donating blood can help up to three different people. Find out where to donate today.",
    },
    {
      id: 2,
      title: "Make a Difference",
      imageUrl: galleryfirstimg,
      description:
        "By donating blood, you are making a difference in someone's life. Every day, patients in hospitals rely on the kindness of donors like you.",
    },
  ];

  const bloodFinderItems = [
    {
      id: 1,
      title: "Find a Donor",
      imageUrl: gallerysecondimg,
      description:
        "Are you or someone you know in need of blood? Use our blood finder tool to find donors in your area.",
    },
    {
      id: 2,
      title: "Learn More",
      imageUrl: gallerysecondimg,
      description:
        "Don't know what blood type you need or want to learn more about the donation process? Check out our resources section.",
    },
  ];

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleShowInStockOnlyChange = (event) => {
    setShowInStockOnly(event.target.checked);
  };

  return (
    <div className="container mx-auto my-10">
      {/* Blood Donation Gallery */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-4xl font-extrabold font-mono text-red-600 text-center">Blood Donation</h2>
          <button className="flex items-center space-x-1">
            <span className="text-black text-lg font-bold">Filter</span>
            <FiFilter className="h-5 w-4 text-red-500" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {bloodDonationItems
            .filter((item) => item.title.toLowerCase().includes(searchText))
            .map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg px-4 py-6 "
              >
                <img
                  src={item.imageUrl} 
                  alt={item.title}
                  className="h-auto mx-auto my-4 w-full rounded-lg"
                />
                <h3 className="text-2xl font-bold text-red-700 font-mono">{item.title}</h3>
                <p className="text-black font-bold">{item.description}</p>
                <button className="flex items-center space-x-1 mt-6">
                  <BiDonateBlood className="h-5 w-4 text-red-500" />
                  <span className="text-1xl text-black font-bold">
                    Donate Now
                  </span>
                </button>
              </div>
            ))}
        </div>
        {/* <div className="mt-8 flex justify-center">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </div>
        </div> */}
      </div>

      {/* Blood Finder Gallery */}
      <div>
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-4xl font-extrabold font-mono text-red-600 text-center ">Blood Finder</h2>
          <button className="flex items-center space-x-1">
            <span className="text-black text-lg font-bold">Filter</span>
            <FiFilter className="h-4 w-4 text-red-500" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {bloodFinderItems
            .filter((item) => item.title.toLowerCase().includes(searchText))
            .filter((item) =>
              item.description.toLowerCase().includes(filterText)
            )
            .filter((item) => !showInStockOnly || item.inStock)
            .map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg px-4 py-6"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-auto mx-auto my-4 w-full rounded-lg"
                />
                <h3 className="text-2xl font-bold text-red-700 font-mono">{item.title}</h3>
                <p className="text-black font-bold">{item.description}</p>
                <button className="flex items-center space-x-1 mt-6">
                  <BiDonateBlood className="h-5 w-4 text-red-500" />
                  <span className="text-1xl text-black font-bold">
                    Find Donors
                  </span>
                </button>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </div>
          <div className="relative rounded-md shadow-sm ml-4">
            <select
              name="filter"
              id="filter"
              className="focus:ring-indigo-500 focus:border-none outline-none block w-full pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
              value={filterText}
              onChange={handleFilterTextChange}
            >
              <option value="All Categories"className="outline-none border-none">All Categories</option>
              <option value="Blood Stock">Blood Stock</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="ml-4 flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              checked={showInStockOnly}
              onChange={handleShowInStockOnlyChange}
            />
            <span className="ml-2 text-black">In stock only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MythFactCarousel;