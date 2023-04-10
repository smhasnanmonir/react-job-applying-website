import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import HomeImg from "../HomeImg/HomeImg";
import HomeContent from "../HomeContent/HomeContent";

const Home = () => {
  return (
    <div className="px-[175px] mt-3 mx-auto grid place-items-center">
      <div className="flex items-center">
        <HomeContent></HomeContent>
        <HomeImg></HomeImg>
      </div>
    </div>
  );
};

export default Home;
