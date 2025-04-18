import React from "react";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="w-full md:max-w-md mx-auto"
        src={bannerImage}
        alt="banner Image"
      />
      <div className="text-center">
        <h1 className="text-5xl font-thin">Browse, Search, View, Buy</h1>
      </div>
      <div className="flex justify-center items-center w-2/3 gap-2 mt-2 mx-auto">
        <input
          className="border border-gray-300 shadow h-13 w-2/3 rounded focus:outline-0 px-3"
          type="text"
          name=""
          id=""
          placeholder="Search Your Phones"
        />

        <button className="relative inline-block text-lg group hover:cursor-pointer">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Search</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
