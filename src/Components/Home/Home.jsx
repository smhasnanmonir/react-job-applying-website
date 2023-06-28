import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import HomeImg from "../HomeImg/HomeImg";
import HomeContent from "../HomeContent/HomeContent";
import JobCat from "../JobCat/JobCat";
import JobData from "../JobData/JobData";

const Home = () => {
  const jobDetail = useLoaderData();
  return (
    <div>
      <div className="md:px-[175px] px-[25px] mx-auto grid place-items-center bg-purple-100">
        <div className="flex items-center">
          <HomeContent></HomeContent>
          <div className="md:block hidden">
            <HomeImg></HomeImg>
          </div>
        </div>
      </div>
      <JobCat></JobCat>
      <div className="grid place-content-center mt-[60px] mb-[35px] text-center">
        <h1 className="text-4xl font-extrabold mb-3">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:px-[250px] grid-cols-1 px-[25px]">
        {jobDetail.map((job) => (
          <JobData key={jobDetail._id} job={job}></JobData>
        ))}
      </div>
    </div>
  );
};

export default Home;
