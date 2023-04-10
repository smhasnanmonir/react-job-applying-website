import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto w-1/2">
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-4xl font-extrabold">Career Point</h1>
        <Link to="/">Home</Link>
        <Link to="statistics">Statistics</Link>
        <Link to="job">Applied Jobs</Link>
        <Link to="blog">Blog</Link>
        <button className="btn-primary">Start Applying</button>
      </div>
    </div>
  );
};

export default Navbar;
