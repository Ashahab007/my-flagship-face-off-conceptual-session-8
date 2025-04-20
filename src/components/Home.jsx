import React, { useState } from "react";
import Banner from "./Banner";
import PhoneContainer from "./PhoneContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  // 2.7 take another state and by default set the useState is data
  const [searchPhones, setSearhPhones] = useState(data);

  // 2.1 adding search functionality to search the phones. make a handle event with parameter. to get the data from banner for this set the handleSearch on it's parents & passed as props i.e banner .
  // 2.9 receive the parameter from onSubmit
  const handleSearch = (e, text) => {
    // 2.11 if the search box is empty i.e nothing searched it will show all the phones
    if (text.length === 0) return setSearhPhones(data);

    console.log(text);

    // 2.10 search the phones by name and brand
    const searchedPhones = data.filter(
      (phone) =>
        /* Note: this condition is filter the phone by only letter 
         phone.name.toLowerCase().includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().includes(text.toLowerCase()) */

        // Note: this condition is filter the phone by word
        phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );

    console.log(searchedPhones);
    setSearhPhones(searchedPhones);
  };

  return (
    <>
      {/* 2.2 pass the handleSearch as props */}
      <Banner handleSearch={handleSearch}></Banner>
      {/* 2.8 as we first pass the props as data. as we need to search phone by comparing with the text. so change the props "data" to 'searchPhones' as it's default value set as data. */}
      <PhoneContainer phones={searchPhones}></PhoneContainer>
    </>
  );
};

export default Home;
