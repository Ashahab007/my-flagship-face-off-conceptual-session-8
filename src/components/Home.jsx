import React from "react";
import Banner from "./Banner";
import PhoneContainer from "./PhoneContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Banner></Banner>
      <PhoneContainer phones={data}></PhoneContainer>
    </>
  );
};

export default Home;
