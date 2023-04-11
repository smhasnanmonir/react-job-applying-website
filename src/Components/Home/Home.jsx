import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import HomeImg from "../HomeImg/HomeImg";
import HomeContent from "../HomeContent/HomeContent";
import JobCat from "../JobCat/JobCat";

const Home = () => {
  return (
    <div>
      <div className="mt-8 px-[175px] mx-auto grid place-items-center bg-purple-100">
        <div className="flex items-center">
          <HomeContent></HomeContent>
          <HomeImg></HomeImg>
        </div>
      </div>
      <JobCat></JobCat>
    </div>
  );
};

export default Home;
