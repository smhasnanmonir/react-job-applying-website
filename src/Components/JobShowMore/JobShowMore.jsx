import React, { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Utils/fakeDB";

const JobShowMore = () => {
  const jobApply = useLoaderData();
  const handleApply = (id) => {
    console.log(id);
    addToDb(id);
  };
  const {
    id,
    company_name,
    logo,
    position,
    salary,
    jobType1,
    jobType2,
    requirements,
    description,
    benefits,
  } = jobApply;
  return (
    <div className="mt-9 flex gap-7 lg:px-[250px] mb-[35px]">
      <div className="w-[650px]">
        <div className="p-9 bg-orange-200 rounded-lg">
          <p>
            <span className="font-bold">Job requirement: </span>
            {requirements}
          </p>
          <p className="mt-5 mb-5">
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <p className="">
            <span className="font-bold">Job Benefits: </span>
            {benefits}
          </p>
        </div>
      </div>
      <div className="p-11 bg-purple-200 rounded-lg w-[350px] h-[350px]">
        <h1 className="mb-3 text-2xl font-extrabold">Job Details</h1>
        <img src={logo} />
        <p className="mt-1 font-semibold">Company name: {company_name}</p>
        <p className="mt-1">Position: {position}</p>
        <p className="mt-1">Salary per year: {salary}</p>
        <p className="mt-1">
          Job Type: {jobType1} & {jobType2}
        </p>
        <button onClick={() => handleApply(id)} className="my-btn">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobShowMore;
