import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../ui/Button";
import { MdOutlineBookmark, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorites } from "../../public/localStorage";
import { CartContext } from "../providers/Context";

const PhoneDeatails = () => {
  // 10.11 as we update the the state of the cart so use setCart from CartContext where the update button is created.
  const { setCart } = useContext(CartContext);

  // 3.2 useLoaderData to get all the data
  const data = useLoaderData();
  console.log(data);

  // 3.4 useParams to get the specific id and directly destructured it
  // const singleId = useParams();
  const { id } = useParams();
  console.log(id);

  // 3.5 use find method to get the specific product
  const singlePhone = data.find((phone) => phone.id === parseInt(id)); //as the useParams id was string so converted to number
  console.log(singlePhone);

  const {
    brand,
    camera_info,
    description,
    image,
    model,
    name,
    price,
    storage,
  } = singlePhone;

  // 5.1 my requirement is to save the data in localStorage. So created localStorage in public folder by clicking the bookmark button.

  // 5.3 create a handleFavorite to pass the singlePhone that we found  previously to localStorage exported function addFavorites.

  const handleFavorite = (singlePhone) => {
    console.log(singlePhone);
    // 5.4 call the localStorage addFavorites and pass the parameter singlePhone
    addFavorites(singlePhone);
  };
  return (
    <div>
      <div>
        <img src={image} alt="" srcset="" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-thin">{name}</h1>
        {/* 4.1 creating a reusable button by making the button as component in src-> ui -> Button  */}
        <div className="space-x-4">
          {/* 4.2 to change the name of the button  dynamically pass the button name in label as props */}
          {/* 10.12 create an onclick event. as the setCart is an array. so set the prev value with new value i.e singlePhone upon click*/}
          <Button
            onClick={() => setCart((prev) => [...prev, singlePhone])}
            label={<MdShoppingCartCheckout />}
          ></Button>
          {/* 5.5 assign the onClick as props */}
          <Button
            onClick={() => handleFavorite(singlePhone)}
            label={<MdOutlineBookmark />}
          ></Button>
          {/* 4.7 use the bookmark and favorite icones from react icones and pass the component in the label */}
        </div>
      </div>
    </div>
  );
};

export default PhoneDeatails;
