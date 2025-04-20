import React from "react";
import { Link } from "react-router";
import Button from "../ui/Button";

const EmptyPage = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl">No Products in Favorites</h1>
      <div className="mt-10">
        <Link to="/">
          <Button label="Go Back"></Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyPage;
