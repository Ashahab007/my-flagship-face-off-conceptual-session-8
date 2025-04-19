import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../ui/Button";
import { MdOutlineBookmark, MdShoppingCartCheckout } from "react-icons/md";

const PhoneDeatails = () => {
  // 3.2 useLoaderData to get all the data
  const data = useLoaderData();
  console.log(data);

  // 3.4 useParams to get the specific id and directly destructured it
  // const singleId = useParams();
  const { id } = useParams();
  console.log(id);

  // 3.5 not use find method to get the specific product
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
          <Button label={<MdShoppingCartCheckout />}></Button>
          <Button label={<MdOutlineBookmark />}></Button>
          {/* 4.7 use the bookmark and favorite icones from react icones and pass the component in the label */}
        </div>
      </div>
    </div>
  );
};

export default PhoneDeatails;
