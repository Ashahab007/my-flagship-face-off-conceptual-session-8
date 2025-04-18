import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Home from "../components/Home";
import "../../src/App";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-283.96px)] max-w-7xl mx-auto">
        <div className="max-w-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
