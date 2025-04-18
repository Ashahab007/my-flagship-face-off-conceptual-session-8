import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

// 1.1 my requirement is showing not all the phone. but upon clicking the show all button it will show all the phones. the button name will be changed to show less. then upon clicking the show less it will show the less phones.
const PhoneContainer = ({ phones }) => {
  console.log(phones);
  // 1.2 declare a state
  const [displayPhones, setDisplayPhones] = useState([]);

  //   1.4 as the phone will be displayed by toggle the show all button and upon toggling the phone will be displayed conditionally so take another state
  const [showAll, setShowAll] = useState(false);

  //   1.3 use useEffect for rendering
  useEffect(() => {
    // 1.5 now render the phones data upon showAll condition. if showAll is true all the phones will be shown
    if (showAll) {
      setDisplayPhones(phones);

      //   1.6 if the showAll false then show only 6 phones
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* 1.3 Now replace the phones with displayPhones because phone will be displayed conditionally*/}
        {displayPhones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id}></PhoneCard>
        ))}
      </div>
      {/* 1.7 added onClick and toggle with  showAll by setShowAll*/}
      <button
        onClick={() => {
          setShowAll(!showAll);
          //   1.8 it will help to scroll
          if (showAll) window.scrollTo(0, 200);
        }}
        className="relative inline-block text-lg group hover:cursor-pointer mt-3"
      >
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          {/* changing the show All to showLess and showLess to showAll */}
          <span className="relative">{showAll ? "Show Less" : "Show All"}</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
};

export default PhoneContainer;
