import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="md:px-[45px] px-[15px] py-[15px] bg-orange-300">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl font-extrabold">Career Point</h1>
          <Link to="/">Home</Link>
          <Link to="job">Applied Jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
