import React from "react";
import { useLoaderData, useParams } from "react-router";

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
        <button>Button</button>
      </div>
    </div>
  );
};

export default PhoneDeatails;
