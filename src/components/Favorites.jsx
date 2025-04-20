import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import {
  getFavoritesFromLs,
  removePhoneFromLs,
} from "../../public/localStorage";
import EmptyPage from "../pages/EmptyPage";

// 6.1 showing the Favorites to favorite section
const Favorites = () => {
  // 6.2 use the same state that are used in phone container
  const [displayPhones, setDisplayPhones] = useState([]);

  // 6.3 to get data from localStorage use useEffect

  useEffect(() => {
    // 6.4 call the localStorage function getFavoritesFromLs
    const getPhonesFromLs = getFavoritesFromLs();
    // 6.5 set it to display in favorites
    setDisplayPhones(getPhonesFromLs);
  }, []);

  // 8.2 add a handleRemove to get the id. remember handleDelete will be applied where useEffect is used. because if we used handleDelete in PhoneCard it will not delete from the Favorites. If refresh the page then works because it's not re-render. To re-render it  apply handleDelete where useEffect is applied, it will re-render. Pass the handleDelete as props to PhoneCard to get the id.
  const handleDelete = (id) => {
    removePhoneFromLs(id);

    // 8.3 set for rerender
    setDisplayPhones(getFavoritesFromLs());
  };

  // 9.1 if the cart is empty show no products in favorite
  if (displayPhones.length < 1) {
    return <EmptyPage />;
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {displayPhones.map((phone) => (
          // 7.2 set the props deletable true will show the delete button in favorite section card

          // 8.4 pass the handleDelete as props
          <PhoneCard
            deletable={true}
            phone={phone}
            key={phone.id}
            handleDelete={handleDelete}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
