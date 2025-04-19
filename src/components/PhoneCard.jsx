import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone, deletable }) => {
  const { name, image, description, id } = phone;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {/* 3.3 get the phone id dynamically */}
          <Link to={`/phone-details/${id}`}>
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">View More</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </Link>
        </div>
      </div>
      {/* 7.1 added delete button but as we worked in single Button component, so we don't want to show the delete icon not all the phone card. Only show it in favorite section card by sending a props deletable and show the delete button conditionally.*/}

      {deletable && (
        <button className="btn w-2 rounded-full p-4 text-xl absolute -top-4 -right-3">
          X
        </button>
      )}
    </div>
  );
};

export default PhoneCard;
