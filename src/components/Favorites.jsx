import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import { getFavoritesFromLs } from "../../public/localStorage";

// 6.1 showing the Favorites to favorite section
const Favorites = () => {
  // 6.2 use the same state that are used in phone container
  const [displayPhones, setDisplayPhones] = useState([]);

  // 6.3 to get data from localStorage use useEffect

  useEffect(() => {
    // 6.4 get the localStorage function getFavoritesFromLs
    const getPhonesFromLs = getFavoritesFromLs();
    // 6.5
    setDisplayPhones(getPhonesFromLs);
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {displayPhones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
